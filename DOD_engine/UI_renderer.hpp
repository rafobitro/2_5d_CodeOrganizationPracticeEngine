#pragma once
#define DEFOULT_COLOR 0xFFD4D4D4
#define DEFOULT_FONT_SIZE 5
#define TEXT_MAX 32
#define DEFOULT_TEXT "HELOW WORLD!\0"
#define DEFOULT_X 0
#define DEFOULT_Y 0


#include <string.h>
# include "game.hpp"
#include "renderer.hpp"

struct UI_text {
    // cordinates are starting from 0 to starting resolution (RENEER_H and RENDER_W constatns) (0,0) is in left top corner
    int x= DEFOULT_X, y= DEFOULT_Y;
    int font_height = DEFOULT_FONT_SIZE;
    int font_width = DEFOULT_FONT_SIZE;
    uint32_t color= DEFOULT_COLOR;
    // needs to end with \0
    char leters[TEXT_MAX];
};



void UI_renderer(Game_state& state,int fps,int avg_fps);

void drow_text(UI_text text,Game_state& state);

