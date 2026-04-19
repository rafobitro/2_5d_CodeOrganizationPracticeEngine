#include "game.hpp"
#include "player.hpp"
#include "textures.hpp"
#include "renderer.hpp"
#include "UI_renderer.hpp"
#include "input.hpp"
#include "trig_tables.hpp"


#include <emscripten.h>
#include <emscripten/html5.h>
#include <cstdint>
#include <cmath>
#include <chrono>



Game_state state;
Input input = { 0 };

double last_time = 0;
int total_frames = 0;
int last_frames = 0;
double session_time = 0;
int current_fps = 0;
int avg_fps = 0;


EM_JS(void, render_to_canvas, (uint32_t* buffer_ptr, int width, int height), {
    const canvas = document.getElementById('canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "yellow";
    ctx.fillRect(139, 10, 50, 50);

    const imgData = ctx.createImageData(width, height);
    const src = Module.HEAPU8.subarray(buffer_ptr, buffer_ptr + (width * height * 4));

    imgData.data.set(src);

    for (let i = 3; i < imgData.data.length; i += 4) {
        imgData.data[i] = 255;
    }

    ctx.putImageData(imgData, 0, 0);
    });


EM_BOOL key_down(int type, const EmscriptenKeyboardEvent* e, void* data) {
    if (strcmp(e->key, "w") == 0 || strcmp(e->key, "W") == 0) input.w = true;
    if (strcmp(e->key, "s") == 0 || strcmp(e->key, "S") == 0) input.s = true;
    if (strcmp(e->key, "a") == 0 || strcmp(e->key, "A") == 0) input.a = true;
    if (strcmp(e->key, "d") == 0 || strcmp(e->key, "D") == 0) input.d = true;
    if (strcmp(e->key, "q") == 0 || strcmp(e->key, "Q") == 0) input.turn_left = true;
    if (strcmp(e->key, "e") == 0 || strcmp(e->key, "E") == 0) input.turn_rigth = true;
    return true;
}

EM_BOOL key_up(int type, const EmscriptenKeyboardEvent* e, void* data) {
    if (strcmp(e->key, "w") == 0 || strcmp(e->key, "W") == 0) input.w = false;
    if (strcmp(e->key, "s") == 0 || strcmp(e->key, "S") == 0) input.s = false;
    if (strcmp(e->key, "a") == 0 || strcmp(e->key, "A") == 0) input.a = false;
    if (strcmp(e->key, "d") == 0 || strcmp(e->key, "D") == 0) input.d = false;
    if (strcmp(e->key, "q") == 0 || strcmp(e->key, "Q") == 0) input.turn_left = false;
    if (strcmp(e->key, "e") == 0 || strcmp(e->key, "E") == 0) input.turn_rigth = false;
    return false;
}

void main_loop() {
    double current_time = emscripten_get_now();
    float delta_time = (float)(current_time - last_time) / 1000.0f;
    session_time += delta_time;
    last_time = current_time;
    total_frames++;

    static double fps_timer = 0;
    fps_timer += delta_time;
    if (fps_timer >= 1.0) {
        current_fps = total_frames - last_frames;
        last_frames = total_frames;
        avg_fps = (int)(total_frames / session_time);
        fps_timer = 0;
    }

    game_update(state, input, delta_time);
    render(state);
    UI_renderer(state, current_fps, avg_fps);



    for (int i = 0; i < state.render_w * state.render_h; i++)
        state.framebuffer[i] = 0x000000;

    render_to_canvas(state.framebuffer, state.render_w, state.render_h);
}

int main() {
    state.render_h = 400;
    state.render_w = 800;
    init_Player(state.player);
    init_Textures(state.textures);
    build_trig_tables();
    
    state.framebuffer = (uint32_t*)malloc(4 * state.render_w * state.render_h);

    emscripten_set_keydown_callback(EMSCRIPTEN_EVENT_TARGET_WINDOW, nullptr, true, key_down);
    emscripten_set_keyup_callback(EMSCRIPTEN_EVENT_TARGET_WINDOW, nullptr, true, key_up);

    emscripten_set_main_loop(main_loop, 0, 1);

    free(state.framebuffer);

    return 0;
}