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
};


void init_Player(Player& player) {
    player.x = 4* GRID_SIZE;
    player.y = 4* GRID_SIZE;
	player.angle = 90.1;
}

struct Game_state {
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
    float player_speed = 0.9f;


};





void render(Game_state& state) {
    float ray_angle  = (state.player.angle - HORIZONTAL_FOV / 2.0f);
    float angle_step = (1.0f / RENDER_W) * HORIZONTAL_FOV;
    float ray_x, ray_y;
    int distance_to_wall;
    bool hit_vertical_wall;
    //raycaster

    for (int i = 0;i < RENDER_W;i++) {
        ray_angle += angle_step;
        ray_x = state.player.x;
        ray_y = state.player.y;
        distance_to_wall = 0;
        hit_vertical_wall = false;

        while (state.map[(int)ray_y / GRID_SIZE][(int)ray_x / GRID_SIZE] == 0) {
            distance_to_wall++;
            float next_x = ray_x + std::cos(ray_angle * PI / 180.0f);
            float next_y = ray_y + std::sin(ray_angle * PI / 180.0f);

            if ((int)next_x / GRID_SIZE != (int)ray_x / GRID_SIZE)
                hit_vertical_wall = true;
            else if ((int)next_y / GRID_SIZE != (int)ray_y / GRID_SIZE)
                hit_vertical_wall = false;

            ray_x = next_x;
            ray_y = next_y;
        }
		
        int total_visable_hight = distance_to_wall * std::tan((VERTICAL_FOV/2)*PI/180.f);
		int Wall_pixels = RENDER_H * GRID_SIZE / total_visable_hight;
        int ceilling_pixels = (RENDER_H / 2) - (Wall_pixels / 2 );
        


        int tex_x,tex_y;
        
        if (!hit_vertical_wall)
            tex_x = (int)TEXTURE_SIZE * ((ray_x / GRID_SIZE) - floor((ray_x / GRID_SIZE)));
        else
            tex_x = (int)TEXTURE_SIZE * ((ray_y/GRID_SIZE) - floor((ray_y / GRID_SIZE)));


        for (int j = 0;j < RENDER_H; j++) {

            if (j < ceilling_pixels) {
                
                state.framebuffer[i + RENDER_W * j] = 0xFF0000;
            }
            else if (j < Wall_pixels + ceilling_pixels) {
                 
                //texture start

                
                tex_y = (int)TEXTURE_SIZE * (((float)(j - ceilling_pixels))/ (float)Wall_pixels);

                
                    
                state.framebuffer[i + RENDER_W * j] = state.textures.grid_lines [tex_y * TEXTURE_SIZE + tex_x] ;
            }
            else {
                state.framebuffer[i + RENDER_W * j] = 0x0000FF;
                    
                    
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


LRESULT CALLBACK WindowProc(HWND hwnd, UINT msg, WPARAM w, LPARAM l) {
    if(msg == WM_DESTROY) PostQuitMessage(0);
    return DefWindowProcW(hwnd, msg, w, l);
}

int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE prev, LPSTR cmd, int show) {
    WNDCLASSW wc = {0};
    wc.lpfnWndProc = WindowProc;
    wc.hInstance = hInstance;
    wc.lpszClassName = L"engine";
    RegisterClassW(&wc);

    RECT rect = { 0, 0, RENDER_W , RENDER_H };
    AdjustWindowRect(&rect, WS_OVERLAPPEDWINDOW, FALSE);

    HWND hwnd = CreateWindowExW(0, L"engine", L"DOD Engine",
        WS_OVERLAPPEDWINDOW, 100, 100,
        rect.right - rect.left,   // adjusted width
        rect.bottom - rect.top,   // adjusted height
        NULL, NULL, hInstance, NULL);

    ShowWindow(hwnd, show);

	//populate BITMAPINFO
    BITMAPINFO info = { 0 };
    info.bmiHeader.biSize = sizeof(BITMAPINFOHEADER);
    info.bmiHeader.biWidth = RENDER_W;
    info.bmiHeader.biHeight = -RENDER_H;
    info.bmiHeader.biPlanes = 1;
    info.bmiHeader.biBitCount = 32;
    info.bmiHeader.biCompression = BI_RGB;


    //populate BITMAPINFO
    BITMAPINFO texture_info = { 0 };
    texture_info.bmiHeader.biSize = sizeof(BITMAPINFOHEADER);
    texture_info.bmiHeader.biWidth = TEXTURE_SIZE;
    texture_info.bmiHeader.biHeight = -TEXTURE_SIZE;
    texture_info.bmiHeader.biPlanes = 1;
    texture_info.bmiHeader.biBitCount = 32;
    texture_info.bmiHeader.biCompression = BI_RGB;
    
        
    Game_state state;

  
    init_Player(state.player);
    init_Textures(state.textures);
    state.framebuffer=(uint32_t*)malloc(4 * RENDER_W * RENDER_H);
   
    float player_x_change = 0, player_y_change = 0;
    MSG msg = {0};
    while (1) {
        while (PeekMessageW(&msg, NULL, 0, 0, PM_REMOVE)) {
            if (msg.message == WM_QUIT) return 0;
            TranslateMessage(&msg);
            DispatchMessageW(&msg);
        }

        
        player_x_change = 0, 
        player_y_change = 0;


        if (GetAsyncKeyState('Q') & 0x8000) state.player.angle -= 0.5f;
        if (GetAsyncKeyState('E') & 0x8000) state.player.angle += 0.5f;
        if (GetAsyncKeyState('W') & 0x8000) {
            player_x_change += std::cos(state.player.angle * PI / 180.0f) * state.player_speed;
            player_y_change += std::sin(state.player.angle * PI / 180.0f) * state.player_speed;
        }
        if (GetAsyncKeyState('S') & 0x8000) {
            player_x_change -= std::cos(state.player.angle * PI / 180.0f) * state.player_speed;
            player_y_change -= std::sin(state.player.angle * PI / 180.0f) * state.player_speed;
        }
        if (GetAsyncKeyState('D') & 0x8000) {
            player_x_change += std::cos((state.player.angle+90) * PI / 180.0f) * state.player_speed;
            player_y_change += std::sin((state.player.angle+90) * PI / 180.0f) * state.player_speed;
        }
        if (GetAsyncKeyState('A') & 0x8000) {
            player_x_change -= std::cos((state.player.angle + 90) * PI / 180.0f) * state.player_speed;
            player_y_change -= std::sin((state.player.angle + 90) * PI / 180.0f) * state.player_speed;
        }
        
        if (state.map[(int)(state.player.y + player_y_change) / GRID_SIZE][(int)(state.player.x + player_x_change) / GRID_SIZE] == 0) {
            state.player.x += player_x_change;
            state.player.y += player_y_change;
        }
        else {
            // when 
            player_x_change/=4;
            player_y_change /= 4;

            if (state.map[(int)(state.player.y) / GRID_SIZE][(int)(state.player.x + player_x_change) / GRID_SIZE] == 0) {
                state.player.x += player_x_change;
            }
            if (state.map[(int)(state.player.y + player_y_change) / GRID_SIZE][(int)(state.player.x) / GRID_SIZE] == 0) {
                state.player.y += player_y_change;
            }
        }
        

       





        // player.angle += 1.0f;
        render(state);
		

        HDC dc = GetDC(hwnd);
          StretchDIBits(dc, 0, 0, RENDER_W, RENDER_H, 0, 0, RENDER_W, RENDER_H, state.framebuffer, &info, DIB_RGB_COLORS, SRCCOPY);
         // StretchDIBits(dc, 0, 0, RENDER_W, RENDER_H, 0, 0, TEXTURE_SIZE, TEXTURE_SIZE, state.textures.horizontal_lines, &texture_info, DIB_RGB_COLORS, SRCCOPY);

        ReleaseDC(hwnd, dc);
    }





    return 0; 
}
