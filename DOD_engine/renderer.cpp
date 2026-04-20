

#include "renderer.hpp"
#include "trig_tables.hpp"


void render(Game_state& state) {
    float ray_angle = (state.player.angle - HORIZONTAL_FOV / 2.0f);
    float angle_step = (1.0f / state.render_w) * HORIZONTAL_FOV;
    float ray_x, ray_y, ray_rad, ray_cos, ray_sin;
    float distance_to_wall;
    bool hit_vertical_wall;

    float tan_FOV = tan((VERTICAL_FOV / 2) * ANGLE_TO_RADIAN);
    //raycaster

    for (int i = 0;i < state.render_w;i++) {
        ray_angle += angle_step;
        ray_x = state.player.x;
        ray_y = state.player.y;
        int index = ((int)(ray_angle * ANGLE_MULTIPLIER)) % (int)STEPS;
        if (index < 0) index += STEPS;
        ray_cos = cos_table[index];
        ray_sin = sin_table[index];

        distance_to_wall = 0;
        hit_vertical_wall = false;

        float x_step;
        float y_step;
        float step;

        float next_x;
        float next_y;

        while (state.map[(int)ray_y / GRID_SIZE][(int)ray_x / GRID_SIZE] == 0 && distance_to_wall< MAX_RENDER_DISTANCE) {
            
         if (ray_cos>=0)
            x_step = GRID_SIZE - fmod(ray_x, GRID_SIZE);
         else 
            x_step = fmod(ray_x, GRID_SIZE);

         if (ray_sin >= 0)
             y_step = GRID_SIZE - fmod(ray_y, GRID_SIZE);
         else
             y_step = fmod(ray_y, GRID_SIZE);
            

            x_step /= (ray_cos  + EPSILON);
            y_step /= (ray_sin + EPSILON);

            if (x_step < 0)x_step *= -1;
            if (y_step < 0)y_step *= -1;
            
            
            if (x_step >= y_step)
                step = y_step;
            else 
                step = x_step;

            if (step <0.01 )
                step = 0.01;


            distance_to_wall += step;
            next_x = ray_x + ray_cos * step;
            next_y = ray_y + ray_sin * step;


            if ((int)next_x / GRID_SIZE != (int)ray_x / GRID_SIZE)
                hit_vertical_wall = true;
            else if ((int)next_y / GRID_SIZE != (int)ray_y / GRID_SIZE)
                hit_vertical_wall = false;

            ray_x = next_x;
            ray_y = next_y;
        }

// How many world units are visible at distance_to_wall
        float total_visable_hight = distance_to_wall * tan_FOV;

// pixels per world unit 
       int Grid_pixels =(GRID_SIZE / total_visable_hight)* state.render_h;

//pixels for wall
        int Wall_pixels = (WALL_SIZE / (total_visable_hight))* state.render_h;

//pixels per ciling
        int ceilling_pixels = (state.render_h / 2) - (Wall_pixels - (state.player.higth / total_visable_hight) * state.render_h);



        int tex_x, tex_y;

        if (!hit_vertical_wall)
            tex_x = ((int)ray_x & (GRID_SIZE-1)) >> 1;
        else
            tex_x = ((int)ray_y & (GRID_SIZE - 1)) >> 1;



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

                ciling_tex_x = ((int)x_cord & (GRID_SIZE - 1)) >> 1;
                ciling_tex_y = ((int)y_cord & (GRID_SIZE - 1)) >> 1;


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


                tex_y = (int)TEXTURE_SIZE * (((float)(j - ceilling_pixels)) / Wall_pixels);


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

                ciling_tex_x = ((int)x_cord & (GRID_SIZE - 1)) >> 1;
                ciling_tex_y = ((int)y_cord & (GRID_SIZE - 1)) >> 1;


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
