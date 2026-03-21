#define PI 3.1415926535f

#include <windows.h>
#include <cstdint>
#include <cmath>

int WIDTH = 800;
int HEIGHT = 450;
int Texture_WIDTH=128;
int Texture_HEIGHT=128;
uint32_t* framebuffer=(uint32_t*)malloc(4*WIDTH*HEIGHT);
uint32_t* wall_texture = (uint32_t*)malloc(4 * Texture_WIDTH * Texture_HEIGHT);
uint32_t* floor_texture = (uint32_t*)malloc(4 * Texture_WIDTH * Texture_HEIGHT);
uint32_t* ciling_texture = (uint32_t*)malloc(4 * Texture_WIDTH * Texture_HEIGHT);





int map[16][8] = {
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

struct Player {
    int x, y;
    float angle;
};



void Init_Player(Player* player) {
    player->x = 256;
    player->y = 256;
	player->angle = 90;

	
}


void render(Player* player) {
    int distance_to_wall = 0;
    int player_hight = 32;
    int wall_hight = 64;
	int Horizontal_FOV = 90;
	int vertical_FOV = 90;
	float ray_x = player->x;
	float ray_y = player->y;
    float ray_angle  = (player->angle - Horizontal_FOV / 2.0f);
	
  
    //reycast rays to find walls 

    for (int i = 0;i < WIDTH;i++) {
		ray_angle += (1.0f / WIDTH) * Horizontal_FOV;
        float ray_x = player->x;
        float ray_y = player->y;
        int distance_to_wall = 0;
        while(map[(int)ray_y/64][(int)ray_x / 64] == 0 ) {
            distance_to_wall++;
            ray_x += std::cos(ray_angle * PI / 180.0f);
            ray_y += std::sin(ray_angle * PI / 180.0f);
        }

        bool hit_vertical_wall = false;


        float frac_x = ray_x / 64.0f - floor(ray_x / 64.0f);
        float frac_y = ray_y / 64.0f - floor(ray_y / 64.0f);

        if (frac_x < frac_y)
            hit_vertical_wall = true;
        else
            hit_vertical_wall = false;

		
        int total_visable_hight = distance_to_wall * 2;
		int Wall_pixels = HEIGHT * wall_hight / total_visable_hight;
        int flor_pixels = (HEIGHT /2) - (Wall_pixels/2 );
        int ceilling_pixels = flor_pixels;

        for (int j = 0;j < HEIGHT; j++) {

            if (j < ceilling_pixels) {
                
                framebuffer[i + WIDTH * j] = 0xFF0000; 
            }
            else if (j < Wall_pixels + ceilling_pixels) {
                //wher texture starts 
                int tex_x;
                if(!hit_vertical_wall)
                    tex_x = (int)Texture_WIDTH*((ray_x - (ray_x-floor(ray_x))) / 64);
                else 
                    tex_x = (int)Texture_WIDTH*((ray_y - (ray_y-floor(ray_y))) / 64);
                int tex_y = (int)Texture_HEIGHT * ((float)(j - ceilling_pixels)/Wall_pixels);
                    
                framebuffer[i + WIDTH * j] = ciling_texture  [tex_y * Texture_WIDTH + tex_x];
            }
            else {
				framebuffer[i + WIDTH * j] = 0x0000FF;
                    
                    
			}
        }
        
        
        
    }

}



void generate_horizontal_line_texture (uint32_t* bitmap) {
    for (int i=0;i< Texture_WIDTH;i++) {
		boolean line_drowing = false;
        for (int j = 0;j < Texture_HEIGHT;j++) {
            
            if (j%10==0)
				line_drowing = !line_drowing;
            if (line_drowing)
            {
				bitmap[i + Texture_WIDTH * j] = 0xFF00FF00;
            }
            else {
                bitmap[i + Texture_WIDTH * j] = 0xFF000000;
            }

        }
    }
}

void generate_vertical_line_texture (uint32_t* bitmap) {
    boolean line_drowing = false;
    for (int i=0;i<Texture_WIDTH;i++) {
        if (i % 8 == 0)
            line_drowing = !line_drowing;
        for (int j = 0;j < Texture_HEIGHT;j++) {
            
            

            if (line_drowing)
            {
                bitmap[i + Texture_WIDTH * j] = 0xFF00FF00;
            }
            else {
                bitmap[i + Texture_WIDTH * j] = 0xFF000000;
            }
        }
    }
}

void generate_gradient_texture (uint32_t* bitmap) {

    for (int i=0;i< Texture_WIDTH;i++) {

        for (int j = 0;j < Texture_HEIGHT;j++) {
          
            float fx = (float)i / Texture_WIDTH;
            float fy = (float)j / Texture_HEIGHT;

            uint8_t red = (uint8_t)(255.0f * (1.0f - std::sqrt(fx * fx + fy * fy) / std::sqrt(2.0f)));
            red += (uint8_t)(255.0f * (1.0f - std::sqrt((1 - fx) * (1 - fx) + (1 - fy) * (1 - fy)) / std::sqrt(2.0f)));
            uint8_t green = (uint8_t)(255.0f * (1.0f - std::sqrt((1 - fx) * (1 - fx) + fy * fy) / std::sqrt(2.0f)));
            uint8_t blue = (uint8_t)(255.0f * (1.0f - std::sqrt(fx * fx + (1 - fy) * (1 - fy)) / std::sqrt(2.0f)));
            

		    uint32_t Pixel  = (red << 16) | (green << 8) | blue;
			bitmap[i + Texture_WIDTH *j] = Pixel;
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

    RECT rect = { 0, 0, WIDTH, HEIGHT };
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
    info.bmiHeader.biWidth = WIDTH;
    info.bmiHeader.biHeight = -HEIGHT;
    info.bmiHeader.biPlanes = 1;
    info.bmiHeader.biBitCount = 32;
    info.bmiHeader.biCompression = BI_RGB;



    //populate BITMAPINFO
    BITMAPINFO texture_info = { 0 };
    texture_info.bmiHeader.biSize = sizeof(BITMAPINFOHEADER);
    texture_info.bmiHeader.biWidth = Texture_WIDTH;
    texture_info.bmiHeader.biHeight = -Texture_HEIGHT;
    texture_info.bmiHeader.biPlanes = 1;
    texture_info.bmiHeader.biBitCount = 32;
    texture_info.bmiHeader.biCompression = BI_RGB;
    


	
	
        
    
	Player player;
    Init_Player(&player);

    
    generate_gradient_texture (wall_texture);
	generate_horizontal_line_texture(floor_texture);
    generate_vertical_line_texture (ciling_texture);
	
	//generate_vertical_line_texture(framebuffer);
    //generate_horizontal_line_texture(framebuffer);
   //generate_gradient_texture(framebuffer);

    MSG msg = {0};
    while (1) {
        while (PeekMessageW(&msg, NULL, 0, 0, PM_REMOVE)) {
            if (msg.message == WM_QUIT) return 0;
            TranslateMessage(&msg);
            DispatchMessageW(&msg);
        }

        

        // player.angle += 1.0f;
        render(&player);
		

        HDC dc = GetDC(hwnd);
        StretchDIBits(dc, 0, 0, WIDTH, HEIGHT, 0, 0, WIDTH, HEIGHT, framebuffer, &info, DIB_RGB_COLORS, SRCCOPY);
        //StretchDIBits(dc, 0, 0, WIDTH, HEIGHT, 0, 0, Texture_WIDTH, Texture_HEIGHT, wall_texture , &texture_info, DIB_RGB_COLORS, SRCCOPY);

        ReleaseDC(hwnd, dc);
    }





    return 0; 
}
