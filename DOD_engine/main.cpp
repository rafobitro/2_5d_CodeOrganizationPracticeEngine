#define PI 3.1415926535f
#define GRID_SIZE 64
#define TEXTURE_SIZE 64
//16 by 9 ratio
#define RENDER_W 800
#define RENDER_H 450
#define MAP_W 8
#define MAP_H 16
#define VERTICAL_FOV 90
#define HORIZONTAL_FOV 90


#include <windows.h>
#include <cstdint>
#include <cmath>
#include <chrono>

bool running = true;






struct Textures {
    uint32_t* gradient;
    uint32_t* vertical_lines;
    uint32_t* horizontal_lines;
    uint32_t* grid_lines;
};


void generate_gradient_texture(uint32_t* bitmap);
void generate_horizontal_line_texture(uint32_t* bitmap);
void generate_vertical_line_texture(uint32_t* bitmap);
void generate_grid_line_texture(uint32_t* bitmap);

void init_Textures(Textures& Textures) {

    Textures.gradient = (uint32_t*)malloc(4 * TEXTURE_SIZE * TEXTURE_SIZE);
    Textures.vertical_lines = (uint32_t*)malloc(4 * TEXTURE_SIZE * TEXTURE_SIZE);
    Textures.horizontal_lines = (uint32_t*)malloc(4 * TEXTURE_SIZE * TEXTURE_SIZE);
    Textures.grid_lines = (uint32_t*)malloc(4 * TEXTURE_SIZE * TEXTURE_SIZE);

    generate_gradient_texture(Textures.gradient);
    generate_horizontal_line_texture(Textures.horizontal_lines);
    generate_vertical_line_texture(Textures.vertical_lines);
    generate_grid_line_texture(Textures.grid_lines);
}

struct Player {
    float x, y;
    float angle;
    float speed;
    float rotation_speed;
};


void init_Player(Player& player) {
    player.x = 4* GRID_SIZE;
    player.y = 4* GRID_SIZE;
	player.angle = 90.1;
    player.speed = 3*GRID_SIZE;
    player.rotation_speed = 90 ;
}

struct Game_state {
    int render_w= RENDER_W;
    int render_h= RENDER_H;
    Player player;
    Textures textures;
    uint32_t* framebuffer;
    int map[MAP_H][MAP_W]= {
       {1,1,1,1,1,1,1,1},
       {1,0,1,0,0,0,0,1},
       {1,1,1,0,1,0,0,1},
       {1,0,0,0,0,0,0,1},
       {1,0,0,0,0,1,0,1},
       {1,1,0,0,0,0,0,1},
       {1,0,0,1,0,0,0,1},
       {1,0,1,0,0,1,0,1},
       {1,0,1,0,0,0,0,1},
       {1,0,1,0,0,0,0,1},
       {1,1,1,0,0,0,0,1},
       {1,0,0,0,0,1,0,1},
       {1,0,0,0,0,0,0,1},
       {1,1,1,0,0,0,0,1},
       {1,0,1,0,0,0,0,1},
       {1,1,1,1,1,1,1,1},
    };
    


};





void render(Game_state& state) {
    float ray_angle  = (state.player.angle - HORIZONTAL_FOV / 2.0f);
    float angle_step = (1.0f / state.render_w) * HORIZONTAL_FOV;
    float ray_x, ray_y;
    int distance_to_wall;
    bool hit_vertical_wall;
    //raycaster

    for (int i = 0;i < state.render_w;i++) {
        ray_angle += angle_step;
        ray_x = state.player.x;
        ray_y = state.player.y;
        distance_to_wall = 0;
        hit_vertical_wall = false;
        float ray_rad = ray_angle * PI / 180.0f;
        float ray_cos = cos(ray_rad);
        float ray_sin = sin(ray_rad);

        while (state.map[(int)ray_y / GRID_SIZE][(int)ray_x / GRID_SIZE] == 0) {
            distance_to_wall++;
            float next_x = ray_x + ray_cos;
            float next_y = ray_y + ray_sin;

            if ((int)next_x / GRID_SIZE != (int)ray_x / GRID_SIZE)
                hit_vertical_wall = true;
            else if ((int)next_y / GRID_SIZE != (int)ray_y / GRID_SIZE)
                hit_vertical_wall = false;

            ray_x = next_x;
            ray_y = next_y;
        }
		
        int total_visable_hight = distance_to_wall * std::tan((VERTICAL_FOV/2)*PI/180.f);
		int Wall_pixels = state.render_h * GRID_SIZE / total_visable_hight;
        int ceilling_pixels = (state.render_h / 2) - (Wall_pixels / 2 );
        


        int tex_x,tex_y;
        
        if (!hit_vertical_wall)
            tex_x = (int)TEXTURE_SIZE * ((ray_x / GRID_SIZE) - floor((ray_x / GRID_SIZE)));
        else
            tex_x = (int)TEXTURE_SIZE * ((ray_y/GRID_SIZE) - floor((ray_y / GRID_SIZE)));



         ray_rad = ray_angle * PI / 180.0f;
        ray_cos = cos(ray_angle * PI / 180.0f);
         ray_sin = sin(ray_angle * PI / 180.0f);

        for (int j = 0;j < state.render_h; j++) {
            float fade = 1.0f-(distance_to_wall/500.0f);
            if (fade < 0) fade = 0;

            float distance;


            if (j < ceilling_pixels) {

                distance = (0.5f*distance_to_wall)/((state.render_h / 2.0f -j)/Wall_pixels);

                fade = 1.0f - (distance / 500.0f);
                if (fade < 0) fade = 0;

                float y_cord;
                float x_cord;
                float angle = state.player.angle - ray_angle;
                int ciling_tex_x;
                int ciling_tex_y;
                x_cord = state.player.x + (int)(ray_cos * distance);
                y_cord = state.player.y + (int)(ray_sin * distance);

                ciling_tex_x = (int)TEXTURE_SIZE * ((x_cord / GRID_SIZE) - floor((x_cord / GRID_SIZE)));


                ciling_tex_y = (int)TEXTURE_SIZE * ((y_cord / GRID_SIZE) - floor((y_cord / GRID_SIZE)));


                uint32_t pixel = state.textures.grid_lines[ciling_tex_y * TEXTURE_SIZE + ciling_tex_x];

                //uint32_t pixel = 0xFF0000;
                uint8_t r = (pixel >> 16) & 0xFF;
                uint8_t g = (pixel >> 8) & 0xFF;
                uint8_t b = pixel & 0xFF;

                r = (uint8_t)r * fade;
                g = (uint8_t)g * fade;
                b = (uint8_t)b * fade;


                state.framebuffer[i + state.render_w * j] = r << 16 | g << 8 | b;

      
            }
            else if (j < Wall_pixels + ceilling_pixels) {
                 
                
                tex_y = (int)TEXTURE_SIZE * (((float)(j - ceilling_pixels))/ (float)Wall_pixels) ;

                
                    
                uint32_t pixel = state.textures.gradient[tex_y * TEXTURE_SIZE + tex_x];
                uint8_t r = (pixel >> 16) & 0xFF;
                uint8_t g = (pixel >> 8) & 0xFF;
                uint8_t b = pixel & 0xFF;

                r =(uint8_t)r*fade;
                g = (uint8_t)g*fade;
                b = (uint8_t)b* fade;


                state.framebuffer[i + state.render_w * j] = r << 16|g<<8 |b;

            }
            else {
              
                distance = (0.5f * distance_to_wall) / ((j-state.render_h / 2.0f) / Wall_pixels);

                fade = 1.0f - (distance / 500.0f);
                if (fade < 0) fade = 0;



                float y_cord;
                float x_cord;
                float angle = state.player.angle - ray_angle;
                int ciling_tex_x;
                int ciling_tex_y;
                x_cord = state.player.x + (int)(std::cos(ray_angle * PI / 180.0f) * distance);
                y_cord = state.player.y + (int)(std::sin(ray_angle * PI / 180.0f) * distance);

                ciling_tex_x = (int)TEXTURE_SIZE * ((x_cord / GRID_SIZE) - floor((x_cord / GRID_SIZE)));


                ciling_tex_y = (int)TEXTURE_SIZE * ((y_cord / GRID_SIZE) - floor((y_cord / GRID_SIZE)));


                uint32_t pixel = state.textures.vertical_lines[ciling_tex_y * TEXTURE_SIZE + ciling_tex_x];
                uint8_t r = (pixel >> 16) & 0xFF;
                uint8_t g = (pixel >> 8) & 0xFF;
                uint8_t b = pixel & 0xFF;

                r = (uint8_t)r * fade;
                g = (uint8_t)g * fade;
                b = (uint8_t)b *= fade ;


                state.framebuffer[i + state.render_w * j] = r << 16 | g << 8 | b;

                    
                    
			}
        }
        
        
        
    }

}


void generate_horizontal_line_texture (uint32_t* bitmap) {
    for (int i=0;i< TEXTURE_SIZE;i++) {
		boolean line_drowing = false;
        for (int j = 0;j < TEXTURE_SIZE;j++) {
            
            if (j%4==0)
				line_drowing = !line_drowing;
            if (line_drowing)
				bitmap[i + TEXTURE_SIZE * j] = 0xFF00FF00;
            else 
                bitmap[i + TEXTURE_SIZE * j] = 0xFF000000;
        }
    }
}


void generate_vertical_line_texture (uint32_t* bitmap) {
    boolean line_drowing = false;
    for (int i=0;i< TEXTURE_SIZE;i++) {
        if (i % 4 == 0)
            line_drowing = !line_drowing;
        for (int j = 0;j < TEXTURE_SIZE;j++) {
            
            if (line_drowing)
                bitmap[i + TEXTURE_SIZE * j] = 0xFF00FF00;
            else 
                bitmap[i + TEXTURE_SIZE * j] = 0xFF000000;
        }
    }
}

void generate_grid_line_texture(uint32_t* bitmap) {
    boolean vertical_line = false;
    boolean horizontal_line = false;
    for (int i = 0;i < TEXTURE_SIZE;i++) {
        if (i % 4 == 0)
            vertical_line = !vertical_line;
        for (int j = 0;j < TEXTURE_SIZE;j++) {


            if (j % 8 == 0)
                horizontal_line = !horizontal_line;

            if (vertical_line || horizontal_line)
                bitmap[i + TEXTURE_SIZE * j] = 0xFF000000;
            else
                bitmap[i + TEXTURE_SIZE * j] = 0xFF00FF00 ;
        
            
            
            

        
        }

        


    }
}

void generate_gradient_texture (uint32_t* bitmap) {

    for (int i=0;i< TEXTURE_SIZE;i++) {
        for (int j = 0;j < TEXTURE_SIZE;j++) {
          
            float fx = (float)i / TEXTURE_SIZE;
            float fy = (float)j / TEXTURE_SIZE;

            uint8_t red = (uint8_t)(255.0f * (1.0f - std::sqrt(fx * fx + fy * fy) / std::sqrt(2.0f)));
            red += (uint8_t)(255.0f * (1.0f - std::sqrt((1 - fx) * (1 - fx) + (1 - fy) * (1 - fy)) / std::sqrt(2.0f)));
            uint8_t green = (uint8_t)(255.0f * (1.0f - std::sqrt((1 - fx) * (1 - fx) + fy * fy) / std::sqrt(2.0f)));
            uint8_t blue = (uint8_t)(255.0f * (1.0f - std::sqrt(fx * fx + (1 - fy) * (1 - fy)) / std::sqrt(2.0f)));
            


		    uint32_t Pixel  = (red << 16) | (green << 8) | blue;
			bitmap[i + TEXTURE_SIZE *j] = Pixel;
        }
    }
}



struct Window_Context {
    Game_state* state;
    BITMAPINFO* info;
    RECT* rect;
};

LRESULT CALLBACK WindowProc(HWND hwnd, UINT msg, WPARAM w, LPARAM l) {

    Window_Context* ctx = (Window_Context*)GetWindowLongPtrW(hwnd, GWLP_USERDATA);

   switch (msg) {
     case WM_SIZE: {
            
            int width = LOWORD(l);
            int height = HIWORD(l);

            if (width > 0 && height > 0) {
                ctx->state->render_w = width;
                ctx->state->render_h = height;

                if (ctx->state->framebuffer) 
                    free(ctx->state->framebuffer);
                
                ctx->state->framebuffer = (uint32_t*)malloc(4 * width * height);

                ctx->info->bmiHeader.biWidth = width;
                ctx->info->bmiHeader.biHeight = -height;


            }
        } break;
        case WM_DESTROY:
            running = false;
        PostQuitMessage(0);
        return 0;
    }
    return DefWindowProcW(hwnd, msg, w, l);
}



int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE prev, LPSTR cmd, int show) {

    WNDCLASSW wc = { 0 };
    wc.lpfnWndProc = WindowProc;
    wc.hInstance = hInstance;
    wc.lpszClassName = L"engine";
    wc.hCursor = LoadCursor(NULL, IDC_ARROW);
    wc.hbrBackground = (HBRUSH)(COLOR_WINDOW + 1);


    RegisterClassW(&wc);



    
    Game_state state;
    init_Player(state.player);
    init_Textures(state.textures);
    state.framebuffer = (uint32_t*)malloc(4 * state.render_w * state.render_h);

    //populate BITMAPINFO
    BITMAPINFO info = { 0 };
    info.bmiHeader.biSize = sizeof(BITMAPINFOHEADER);
    info.bmiHeader.biWidth = state.render_w;
    info.bmiHeader.biHeight = -state.render_h;
    info.bmiHeader.biPlanes = 1;
    info.bmiHeader.biBitCount = 32;
    info.bmiHeader.biCompression = BI_RGB;

    //populate texture BITMAPINFO 
    BITMAPINFO texture_info = { 0 };
    texture_info.bmiHeader.biSize = sizeof(BITMAPINFOHEADER);
    texture_info.bmiHeader.biWidth = TEXTURE_SIZE;
    texture_info.bmiHeader.biHeight = -TEXTURE_SIZE;
    texture_info.bmiHeader.biPlanes = 1;
    texture_info.bmiHeader.biBitCount = 32;
    texture_info.bmiHeader.biCompression = BI_RGB;



    RECT rect = { 0, 0, state.render_w , state.render_h };
    AdjustWindowRect(&rect, WS_OVERLAPPEDWINDOW, FALSE);

    HWND hwnd = CreateWindowExW(0, L"engine", L"DOD Engine",
        WS_OVERLAPPEDWINDOW, 100, 100,
        rect.right - rect.left,   
        rect.bottom - rect.top,   
        NULL, NULL, hInstance, NULL);



    Window_Context ctx;
    ctx.state = &state;
    ctx.info = &info;
    ctx.rect = &rect;
    

    SetWindowLongPtrW(hwnd, GWLP_USERDATA, (LONG_PTR)&ctx);

    ShowWindow(hwnd, show);

	

    
   
        

  
   
    
   

    clock_t game_start = clock();
    clock_t game_end;

    clock_t frame_start = clock();
    clock_t frame_end;

    int fps, total_frames=0,avg_fps;
    float delta_time;



  
    float player_x_change , player_y_change , player_angle_change;

    MSG msg = {0};

    while (running) {
        while (PeekMessageW(&msg, NULL, 0, 0, PM_REMOVE)) {
            if (msg.message == WM_QUIT) return 0;
            TranslateMessage(&msg);
            DispatchMessageW(&msg);
        }

        
        frame_end = clock();
        delta_time = (float)(frame_end - frame_start) / CLOCKS_PER_SEC;
        frame_start = frame_end;
        
        fps = 1.0f / delta_time; 
        total_frames++;

        player_x_change = 0, 
        player_y_change = 0;
        player_angle_change = 0;
        

        if (GetAsyncKeyState('Q') & 0x8000)  player_angle_change -= state.player.rotation_speed;
        if (GetAsyncKeyState('E') & 0x8000)  player_angle_change += state.player.rotation_speed;
        
        if (GetAsyncKeyState('W') & 0x8000) {
            player_x_change += std::cos(state.player.angle * PI / 180.0f) * state.player.speed;
            player_y_change += std::sin(state.player.angle * PI / 180.0f) * state.player.speed;
        }
        if (GetAsyncKeyState('S') & 0x8000) {
            player_x_change -= std::cos(state.player.angle * PI / 180.0f) * state.player.speed;
            player_y_change -= std::sin(state.player.angle * PI / 180.0f) * state.player.speed;
        }
        if (GetAsyncKeyState('D') & 0x8000) {
            player_x_change += std::cos((state.player.angle+90) * PI / 180.0f) * state.player.speed;
            player_y_change += std::sin((state.player.angle+90) * PI / 180.0f) * state.player.speed;
        }
        if (GetAsyncKeyState('A') & 0x8000) {
            player_x_change -= std::cos((state.player.angle + 90) * PI / 180.0f) * state.player.speed;
            player_y_change -= std::sin((state.player.angle + 90) * PI / 180.0f) * state.player.speed;
        }

        
        player_x_change *= delta_time,
        player_y_change *= delta_time;
        player_angle_change *= delta_time;


        state.player.angle += player_angle_change;
        
        if (state.map[(int)(state.player.y + player_y_change) / GRID_SIZE][(int)(state.player.x + player_x_change) / GRID_SIZE] == 0) {
            state.player.x += player_x_change;
            state.player.y += player_y_change;
        }
        else {
            
            player_x_change/=4;
            player_y_change /= 4;


            

            if (state.map[(int)(state.player.y) / GRID_SIZE][(int)(state.player.x + player_x_change) / GRID_SIZE] == 0) {
                state.player.x += player_x_change;
            }
            if (state.map[(int)(state.player.y + player_y_change) / GRID_SIZE][(int)(state.player.x) / GRID_SIZE] == 0) {
                state.player.y += player_y_change;
            }
        }
        

       
        
        render(state);
		

        HDC dc = GetDC(hwnd);
         StretchDIBits(dc, 0, 0, state.render_w, state.render_h, 0, 0, state.render_w, state.render_h, state.framebuffer, &info, DIB_RGB_COLORS, SRCCOPY);
       //  StretchDIBits(dc, 0, 0, state.render_w, state.render_h, 0, 0, TEXTURE_SIZE, TEXTURE_SIZE, state.textures.gradient, &texture_info, DIB_RGB_COLORS, SRCCOPY);

        ReleaseDC(hwnd, dc);
    }


    free(state.framebuffer);
    free(state.textures.gradient);
    free(state.textures.vertical_lines);
    free(state.textures.horizontal_lines);
    free(state.textures.grid_lines);

    game_end = clock();
    int sesion_time=(float)(game_start - game_end) / CLOCKS_PER_SEC;
    avg_fps = total_frames / sesion_time;




    return 0; 
}
