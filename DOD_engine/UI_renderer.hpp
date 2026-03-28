#pragma once
#define DEFOULT_COLOR 0xFFD4D4D4
#define DEFOULT_FONT_SIZE 5
#define TEXT_MAX 16
#define DEFOULT_TEXT "HELOW WORLD!\0"
#define DEFOULT_X 0
#define DEFOULT_Y 30



#include <string.h>
# include "game.hpp"


struct UI_text {
    int x= DEFOULT_X, y= DEFOULT_Y;
    int font_size = DEFOULT_FONT_SIZE;
    uint32_t color= DEFOULT_COLOR;
    // needs to end with \0
    char leters[TEXT_MAX];
};



void UI_renderer(Game_state state,int fps,int avg_fps);

void drow_text(UI_text text,Game_state state);

