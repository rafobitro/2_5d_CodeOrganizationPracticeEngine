
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

        while (state.map[(int)ray_y / GRID_SIZE][(int)ray_x / GRID_SIZE] == 0 && distance_to_wall< MAX_RENDER_DISTANCE) {
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

// How many world units are visible at distance_to_wall
        int total_visable_hight = distance_to_wall * std::tan((VERTICAL_FOV / 2) * PI / 180.f);

// pixels per world unit 
       int Grid_pixels =(GRID_SIZE / (float)total_visable_hight)* state.render_h;

//pixels for wall
        int Wall_pixels = (WALL_SIZE / (float)total_visable_hight)* state.render_h;

//pixels per ciling
        int ceilling_pixels = (state.render_h / 2) - (Wall_pixels - (state.player.higth / (float)total_visable_hight) * state.render_h);



        int tex_x, tex_y;

        if (!hit_vertical_wall)
            tex_x = (int)TEXTURE_SIZE * ((ray_x / GRID_SIZE) - floor((ray_x / GRID_SIZE)));
        else
            tex_x = (int)TEXTURE_SIZE * ((ray_y / GRID_SIZE) - floor((ray_y / GRID_SIZE)));



        float fade = 1.0f - (distance_to_wall / MAX_RENDER_DISTANCE);
        if (fade < 0) fade = 0;

        float distance;
        int j = 0;
            
        float H;

            while (j < ceilling_pixels) {

                //simular tryangles
                // h = (WALL_SIZE - state.player.higth);
                // D = distance_to_wall;
                 H = ((state.render_h / 2.0f - j) / Grid_pixels)* GRID_SIZE;


                distance = ((WALL_SIZE - state.player.higth) * distance_to_wall) / H;


                fade = 1.0f - (distance / MAX_RENDER_DISTANCE);
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

                j++;
            }
            while (j < (Wall_pixels + ceilling_pixels) && j< state.render_h) {


                tex_y = (int)TEXTURE_SIZE * (((float)(j - ceilling_pixels)) / (float)Wall_pixels);


                uint32_t pixel = state.textures.data [((state.texture_map[(int)ray_y / GRID_SIZE][(int)ray_x / GRID_SIZE]) / 10) % 10][tex_y * TEXTURE_SIZE + tex_x];

                uint8_t r = (pixel >> 16) & 0xFF;
                uint8_t g = (pixel >> 8) & 0xFF;
                uint8_t b = pixel & 0xFF;

                r = (uint8_t)r * fade;
                g = (uint8_t)g * fade;
                b = (uint8_t)b * fade;


                state.framebuffer[state.render_w * j + i] = r << 16 | g << 8 | b;

                j++;

            }
            while (j < state.render_h) {

                //simular tryangles
                // h = state.player.higth;
                // D = distance_to_wall;
                H = ((j - state.render_h / 2.0f) / Grid_pixels) * GRID_SIZE;

                distance = (state.player.higth * distance_to_wall) / H;
               

                fade = 1.0f - (distance / MAX_RENDER_DISTANCE);
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
                b = (uint8_t)b * fade;


                state.framebuffer[state.render_w * j + i] = r << 16 | g << 8 | b;


                j++;

            }
        



    }

}
