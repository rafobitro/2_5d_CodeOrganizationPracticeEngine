#include "textures.hpp"

#include <windows.h>
#include <cstdint>
#include <cmath>

bool running = true;

int WIDTH = 64 * 8;
int HIGTH = 64 * 8;

struct Window_Context {
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
            WIDTH = width;
            HIGTH = height;
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
    wc.lpszClassName = L"texture_vewer";
    wc.hCursor = LoadCursor(NULL, IDC_ARROW);
    wc.hbrBackground = (HBRUSH)(COLOR_WINDOW + 1);


    RegisterClassW(&wc);


    Textures textures;
    init_Textures(textures);


    //populate texture BITMAPINFO 
    BITMAPINFO texture_info = { 0 };
    texture_info.bmiHeader.biSize = sizeof(BITMAPINFOHEADER);
    texture_info.bmiHeader.biWidth = TEXTURE_SIZE;
    texture_info.bmiHeader.biHeight = -TEXTURE_SIZE;
    texture_info.bmiHeader.biPlanes = 1;
    texture_info.bmiHeader.biBitCount = 32;
    texture_info.bmiHeader.biCompression = BI_RGB;


    RECT rect = { 0, 0, WIDTH , HIGTH };
    AdjustWindowRect(&rect, WS_OVERLAPPEDWINDOW, FALSE);

    HWND hwnd = CreateWindowExW(0, L"texture_vewer", L"DOD texture_vewer",
        WS_OVERLAPPEDWINDOW, 100, 100,
        rect.right - rect.left,
        rect.bottom - rect.top,
        NULL, NULL, hInstance, NULL);

    Window_Context ctx;
    ctx.info = &texture_info;
    ctx.rect = &rect;

    SetWindowLongPtrW(hwnd, GWLP_USERDATA, (LONG_PTR)&ctx);

    ShowWindow(hwnd, show);

    MSG msg = { 0 };

    while (running) {
        while (PeekMessageW(&msg, NULL, 0, 0, PM_REMOVE)) {
            if (msg.message == WM_QUIT) running = false;
            TranslateMessage(&msg);
            DispatchMessageW(&msg);
        }

        HDC dc = GetDC(hwnd);
        StretchDIBits(dc, 0, 0, WIDTH, HIGTH, 0, 0, TEXTURE_SIZE, TEXTURE_SIZE, textures.gradient, &texture_info, DIB_RGB_COLORS, SRCCOPY);

        ReleaseDC(hwnd, dc);
    }

    free(textures.gradient);
    free(textures.vertical_lines);
    free(textures.horizontal_lines);
    free(textures.grid_lines);

    return 0;
}
