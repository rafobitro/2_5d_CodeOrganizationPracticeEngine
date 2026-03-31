#include "font8x8_basic.h"
#include "UI_renderer.hpp"
#include <iostream>




void convert(UI_text& text, int render_w, int render_h) {

	text.x *= (render_w / (float)RENDER_W);
	text.y *= (render_h / (float)RENDER_H);
	text.font_height *= (render_h / (float)RENDER_H);
	text.font_width *= (render_w / (float)RENDER_W);

}


void UI_renderer(Game_state& state, int fps, int avg_fps){
	//fps
	UI_text fps_text;
	UI_text avg_fps_text;

	char buffer[TEXT_MAX];
	sprintf(buffer, "FPS %d", fps);
	strcpy(fps_text.leters, buffer);
	sprintf(buffer, "AVG FPS %d", avg_fps);
	strcpy(avg_fps_text.leters, buffer);

	avg_fps_text.y += avg_fps_text.font_height*8;

	


	
	

	//crosshair

	UI_text crosshair;
	strcpy(crosshair.leters, "+");
	
	// ubdate font size before centering 
	crosshair.y = RENDER_H / 2 -( crosshair.font_height*4);
	crosshair.x = RENDER_W / 2 - (crosshair.font_width * 4);
	crosshair.color = 0xFF0000;

	convert(fps_text, state.render_w, state.render_h);
	convert(avg_fps_text, state.render_w, state.render_h);
	convert(crosshair, state.render_w, state.render_h);





	drow_text(fps_text, state);
	drow_text(avg_fps_text, state);
	drow_text(crosshair, state);






}

void drow_text(UI_text text,Game_state& state) {

	 
	for (int leter_index = 0;text.leters[leter_index] != '\0'; leter_index++) {
		char c = text.leters[leter_index];

		for (int col = 0;col < 8;col++) {
			
			uint8_t row_bits = font8x8_basic[c][col];
			for (int row = 0;row < 8;row++) {
				
				if (row_bits & (1 << row)) {
										
					for (int i = 0;i < text.font_height;i++) {
						int y_cord = text.y + (col * text.font_height) + i;
						if (y_cord >= state.render_h)
							y_cord -= state.render_h;
						int y_offset = y_cord * state.render_w;
						for (int j = 0; j < text.font_width;j++) {
							int x_cord = text.x + (leter_index * 8 * text.font_width) + (row * text.font_width) + j;
							if (x_cord >= state.render_w)
								x_cord -= state.render_w;
							
							state.framebuffer[y_offset +x_cord] = text.color;

						}
					}
				}
			}
		}
	}

}