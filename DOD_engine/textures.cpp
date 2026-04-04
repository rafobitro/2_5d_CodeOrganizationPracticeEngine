#include "textures.hpp"
#include <fstream>

void init_Textures(Textures& textures) {

    
    generate_gradient_texture(textures.data[0]);
    generate_horizontal_line_texture(textures.data[1]);
    generate_vertical_line_texture(textures.data[2]);
    generate_grid_line_texture(textures.data[3]);
    //textures are created by 711studios 
    bmp_loader(textures.data[4], "Brick_Wall_64x64.bmp");
    bmp_loader(textures.data[5], "Brick_Wall_Cracked_64x64.bmp");
    bmp_loader(textures.data[6], "Metal_Floor_64x64.bmp");
    bmp_loader(textures.data[7], "Rocky_Road_64x64.bmp");
    bmp_loader(textures.data[8], "Wooden_Floor_Vertical_64x64.bmp");
    bmp_loader(textures.data[9], "Wooden_Floor_Horizontal_64x64.bmp");

    textures.count = 10;
}

void generate_horizontal_line_texture(uint32_t* bitmap) {
    for (int i = 0;i < TEXTURE_SIZE;i++) {
        bool line_drowing = false;
        for (int j = 0;j < TEXTURE_SIZE;j++) {

            if (j % 4 == 0)
                line_drowing = !line_drowing;
            if (line_drowing)
                bitmap[TEXTURE_SIZE * j + i] = 0xFF00FF00;
            else
                bitmap[TEXTURE_SIZE * j + i] = 0xFF000000;
        }
    }
}

void generate_vertical_line_texture(uint32_t* bitmap) {
    bool line_drowing = false;
    for (int i = 0;i < TEXTURE_SIZE;i++) {
        if (i % 4 == 0)
            line_drowing = !line_drowing;
        for (int j = 0;j < TEXTURE_SIZE;j++) {

            if (line_drowing)
                bitmap[TEXTURE_SIZE * j + i] = 0xFF00FF00;
            else
                bitmap[TEXTURE_SIZE * j + i] = 0xFF000000;
        }
    }
}

void generate_grid_line_texture(uint32_t* bitmap) {
    bool vertical_line = true;
    bool horizontal_line = true;
    for (int i = 0;i < TEXTURE_SIZE;i++) {
        if (i % 4 == 0)
            vertical_line = !vertical_line;
        for (int j = 0;j < TEXTURE_SIZE;j++) {


            if (j % 4 == 0)
                horizontal_line = !horizontal_line;

            if (vertical_line || horizontal_line)
                bitmap[TEXTURE_SIZE * j + i] = 0xFF000000;
            else
                bitmap[TEXTURE_SIZE * j + i] = 0xFF00FF00;
        }
    }
}

void generate_gradient_texture(uint32_t* bitmap) {

    for (int i = 0;i < TEXTURE_SIZE;i++) {
        for (int j = 0;j < TEXTURE_SIZE;j++) {

            float fx = (float)i / TEXTURE_SIZE;
            float fy = (float)j / TEXTURE_SIZE;

            uint8_t red = (uint8_t)(255.0f * (1.0f - std::sqrt(fx * fx + fy * fy) / std::sqrt(2.0f)));
            red += (uint8_t)(255.0f * (1.0f - std::sqrt((1 - fx) * (1 - fx) + (1 - fy) * (1 - fy)) / std::sqrt(2.0f)));
            uint8_t green = (uint8_t)(255.0f * (1.0f - std::sqrt((1 - fx) * (1 - fx) + fy * fy) / std::sqrt(2.0f)));
            uint8_t blue = (uint8_t)(255.0f * (1.0f - std::sqrt(fx * fx + (1 - fy) * (1 - fy)) / std::sqrt(2.0f)));



            uint32_t Pixel = (red << 16) | (green << 8) | blue;
            bitmap[TEXTURE_SIZE * j + i] = Pixel;
        }
    }
}

void bmp_loader(uint32_t* bitmap , std::string path) {

    std::string fullPath = std::string(TEXTURE_PATH) + path;

    FILE* f = fopen(fullPath.c_str(), "rb");
    if (!f) return;
    fseek(f, 138, SEEK_SET);

    for (int i = 0; i < TEXTURE_SIZE * TEXTURE_SIZE; i++) {

        uint8_t b = fgetc(f);
        uint8_t g = fgetc(f);
        uint8_t r = fgetc(f);
        fgetc(f);

        bitmap[i] = (r << 16) | (g << 8) | b;
    }
    fclose(f);

}