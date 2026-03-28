#include "game.hpp"
#include "player.hpp"
#include "textures.hpp"
#include "renderer.hpp"
#include "UI_renderer.hpp"
#include "input.hpp"

#include <windows.h>
#include <cstdint>
#include <cmath>
#include <chrono>

bool running = true;



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
    float sesion_time = 0;

    MSG msg = {0};

    Input input;

    while (running) {
        while (PeekMessageW(&msg, NULL, 0, 0, PM_REMOVE)) {
            if (msg.message == WM_QUIT) running = false;
            TranslateMessage(&msg);
            DispatchMessageW(&msg);
        }

        
        frame_end = clock();
        delta_time = (float)(frame_end - frame_start) / CLOCKS_PER_SEC;
        sesion_time += delta_time;
        frame_start = frame_end;
        total_frames++;
        fps = 1.0f / delta_time; 
        avg_fps = total_frames / sesion_time;
        

        if (GetAsyncKeyState('Q') & 0x8000)  input.turn_left = true;
        else input.turn_left = false;
        if (GetAsyncKeyState('E') & 0x8000)  input.turn_rigth = true;
        else input.turn_rigth = false;
        if (GetAsyncKeyState('W') & 0x8000) input.w = true;
        else input.w = false;
        if (GetAsyncKeyState('S') & 0x8000) input.s = true;
        else input.s = false;
        if (GetAsyncKeyState('D') & 0x8000)input.d = true;
        else input.d = false;
        if (GetAsyncKeyState('A') & 0x8000) input.a = true;
        else input.a = false;

        game_update(state,input,delta_time);
       
        
        render(state);
        UI_renderer(state,fps,avg_fps);


         HDC dc = GetDC(hwnd);

         StretchDIBits(dc, 0, 0, state.render_w, state.render_h, 0, 0, state.render_w, state.render_h, state.framebuffer, &info, DIB_RGB_COLORS, SRCCOPY);

        ReleaseDC(hwnd, dc);
    }


    free(state.framebuffer);
    free(state.textures.gradient);
    free(state.textures.vertical_lines);
    free(state.textures.horizontal_lines);
    free(state.textures.grid_lines);
 

    return 0; 
}
