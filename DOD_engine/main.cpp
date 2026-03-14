#include <windows.h>

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

    HWND hwnd = CreateWindowExW(0, L"engine", L"DOD Engine",
        WS_OVERLAPPEDWINDOW, 100, 100, 800, 600,
        NULL, NULL, hInstance, NULL);

    ShowWindow(hwnd, show);

    MSG msg = {0};
    while(GetMessageW(&msg, NULL, 0, 0)) {
        TranslateMessage(&msg);
        DispatchMessageW(&msg);
    }
    return 0;
}
