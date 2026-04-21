#pragma once
#define TEXTURE_SIZE 64
#define MAX_TEXTURES 32
#define MAX_RENDER_DISTANCE 750.0f
#define TEXTURE_PIXELS (TEXTURE_SIZE * TEXTURE_SIZE)
#include <cstdint>
#include <cmath>
#include <string>

struct Textures {
    uint32_t data[MAX_TEXTURES][TEXTURE_PIXELS];
    int count;
};


void generate_gradient_texture(uint32_t* bitmap);
void generate_horizontal_line_texture(uint32_t* bitmap);
void generate_vertical_line_texture(uint32_t* bitmap);
void generate_grid_line_texture(uint32_t* bitmap);
void bmp_loader(uint32_t* bitmap, std::string path);

void init_Textures(Textures& Textures);

void export_assets(Textures& textures, std::string path);