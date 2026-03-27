#pragma once
#define TEXTURE_SIZE 64
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

void init_Textures(Textures& Textures);