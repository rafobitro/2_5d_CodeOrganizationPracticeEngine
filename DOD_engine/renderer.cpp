
#include "renderer.hpp"


void render(Game_state& state) {
    float ray_angle = (state.player.angle - HORIZONTAL_FOV / 2.0f);
    float angle_step = (1.0f / state.render_w) * HORIZONTAL_FOV;
    float ray_x, ray_y, ray_rad, ray_cos, ray_sin;
    int distance_to_wall;
    bool hit_vertical_wall;
    //raycaster

    for (int i = 0;i < state.render_w;i++) {
        ray_angle += angle_step;
        ray_x = state.player.x;
        ray_y = state.player.y;
        ray_rad = ray_angle * PI / 180.0f;
        ray_cos = cos(ray_rad);
        ray_sin = sin(ray_rad);
        distance_to_wall = 0;
        hit_vertical_wall = false;

        while (state.map[(int)ray_y / GRID_SIZE][(int)ray_x / GRID_SIZE] == 0) {
            distance_to_wall++;
            float next_x = ray_x + ray_cos;
            float next_y = ray_y + ray_sin;

            if ((int)next_x / GRID_SIZE != (int)ray_x / GRID_SIZE)
                hit_vertical_wall = true;
            else if ((int)next_y / GRID_SIZE != (int)ray_y / GRID_SIZE)
                hit_vertical_wall = false;

            ray_x = next_x;
            ray_y = next_y;
        }
        int total_visable_hight = distance_to_wall * std::tan((VERTICAL_FOV / 2) * PI / 180.f);
        int Wall_pixels = (int)(state.render_h / 2) * (WALL_SIZE - state.player.higth) / (total_visable_hight / 2.0f);
        int Greed_pixels = state.render_h * GRID_SIZE / total_visable_hight;
        int ceilling_pixels = (state.render_h / 2) - (Wall_pixels);
        Wall_pixels += Greed_pixels / 2;



        int tex_x, tex_y;

        if (!hit_vertical_wall)
            tex_x = (int)TEXTURE_SIZE * ((ray_x / GRID_SIZE) - floor((ray_x / GRID_SIZE)));
        else
            tex_x = (int)TEXTURE_SIZE * ((ray_y / GRID_SIZE) - floor((ray_y / GRID_SIZE)));





        for (int j = 0;j < state.render_h; j++) {
            float fade = 1.0f - (distance_to_wall / 500.0f);
            if (fade < 0) fade = 0;

            float distance;


            if (j < ceilling_pixels) {

                distance = (((WALL_SIZE - state.player.higth) / (float)GRID_SIZE) * distance_to_wall) / ((state.render_h / 2.0f - j) / ((Greed_pixels)));

                fade = 1.0f - (distance / 500.0f);
                if (fade < 0) fade = 0;

                float y_cord;
                float x_cord;
                float angle = state.player.angle - ray_angle;
                int ciling_tex_x;
                int ciling_tex_y;
                x_cord = state.player.x + (int)(ray_cos * distance);
                y_cord = state.player.y + (int)(ray_sin * distance);

                ciling_tex_x = (int)TEXTURE_SIZE * ((x_cord / GRID_SIZE) - floor((x_cord / GRID_SIZE)));


                ciling_tex_y = (int)TEXTURE_SIZE * ((y_cord / GRID_SIZE) - floor((y_cord / GRID_SIZE)));


                uint32_t pixel = state.textures.data[(state.texture_map[(int)y_cord / GRID_SIZE][(int)x_cord / GRID_SIZE]) % 10][ciling_tex_y * TEXTURE_SIZE + ciling_tex_x];

                //uint32_t pixel = 0xFF0000;
                uint8_t r = (pixel >> 16) & 0xFF;
                uint8_t g = (pixel >> 8) & 0xFF;
                uint8_t b = pixel & 0xFF;

                r = (uint8_t)r * fade;
                g = (uint8_t)g * fade;
                b = (uint8_t)b * fade;


                state.framebuffer[i + state.render_w * j] = r << 16 | g << 8 | b;


            }
            else if (j < Wall_pixels + ceilling_pixels) {


                tex_y = (int)TEXTURE_SIZE * (((float)(j - ceilling_pixels)) / (float)Wall_pixels);


                uint32_t pixel = state.textures.data[((state.texture_map[(int)ray_y / GRID_SIZE][(int)ray_x / GRID_SIZE]) / 10) % 10][tex_y * TEXTURE_SIZE + tex_x];

                uint8_t r = (pixel >> 16) & 0xFF;
                uint8_t g = (pixel >> 8) & 0xFF;
                uint8_t b = pixel & 0xFF;

                r = (uint8_t)r * fade;
                g = (uint8_t)g * fade;
                b = (uint8_t)b * fade;


                state.framebuffer[state.render_w * j + i] = r << 16 | g << 8 | b;

            }
            else {

                distance = ((state.player.higth / (float)GRID_SIZE) * distance_to_wall) / ((j - state.render_h / 2.0f) / Greed_pixels);

                fade = 1.0f - (distance / 500.0f);
                if (fade < 0) fade = 0;



                float y_cord;
                float x_cord;
                float angle = state.player.angle - ray_angle;
                int ciling_tex_x;
                int ciling_tex_y;
                x_cord = state.player.x + (int)(ray_cos * distance);
                y_cord = state.player.y + (int)(ray_sin * distance);

                ciling_tex_x = (int)TEXTURE_SIZE * ((x_cord / GRID_SIZE) - floor((x_cord / GRID_SIZE)));


                ciling_tex_y = (int)TEXTURE_SIZE * ((y_cord / GRID_SIZE) - floor((y_cord / GRID_SIZE)));


                uint32_t pixel = state.textures.data[((state.texture_map[(int)y_cord / GRID_SIZE][(int)x_cord / GRID_SIZE]) / 100) % 10][ciling_tex_y * TEXTURE_SIZE + ciling_tex_x];

                uint8_t r = (pixel >> 16) & 0xFF;
                uint8_t g = (pixel >> 8) & 0xFF;
                uint8_t b = pixel & 0xFF;

                r = (uint8_t)r * fade;
                g = (uint8_t)g * fade;
                b = (uint8_t)b *= fade;


                state.framebuffer[state.render_w * j + i] = r << 16 | g << 8 | b;



            }
        }



    }

}
