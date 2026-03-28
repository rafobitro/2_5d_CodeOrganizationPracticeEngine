#include "font8x8_basic.h"
#include "UI_renderer.hpp"
 

int convert(int cord , int size) {
	return size * ( cord/100.0f);
}

void UI_renderer(Game_state state, int fps, int avg_fps){

	UI_text text;

	strcpy(text.leters, DEFOULT_TEXT);
	text.x = convert(text.x,state.render_w);
	text.y = convert(text.y, state.render_h);
	

	drow_text(text,state);
}

void drow_text(UI_text text,Game_state state) {

	 
	for (int leter_index = 0;text.leters[leter_index] != '\0'; leter_index++) {
		char c = text.leters[leter_index];

		for (int col = 0;col < 8;col++) {
			
			uint8_t row_bits = font8x8_basic[c][col];
			for (int row = 0;row < 8;row++) {
				
				if (row_bits & (1 << row)) {
										
					for (int i = 0;i < text.font_size;i++) {
						for (int j = 0; j < text.font_size;j++) {

							int x_cord = text.x + (leter_index * 8 * text.font_size) + (row * text.font_size) + j;
							int y_cord = text.y + (col * text.font_size) + i;
						//	if(x_cord>state.render_w)
							state.framebuffer[y_cord*state.render_w+x_cord] = text.color;

						}
					}
				}
			}
		}
	}

}