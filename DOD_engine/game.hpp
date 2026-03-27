#pragma once
#define RENDER_W 800
#define RENDER_H 450
#define MAP_W 8
#define MAP_H 16



#include "input.hpp"
#include "player.hpp"
#include "textures.hpp"


struct Game_state {
    int render_w = RENDER_W;
    int render_h = RENDER_H;
    Player player;
    Textures textures;
    uint32_t* framebuffer;
    int map[MAP_H][MAP_W] = {
       {1,1,1,1,1,1,1,1},
       {1,0,1,0,0,0,0,1},
       {1,1,1,0,1,0,0,1},
       {1,0,0,0,0,0,0,1},
       {1,0,0,0,0,1,0,1},
       {1,1,0,0,0,0,0,1},
       {1,0,0,1,0,0,0,1},
       {1,0,1,0,0,1,0,1},
       {1,0,1,0,0,0,0,1},
       {1,0,1,0,0,0,0,1},
       {1,1,1,0,0,0,0,1},
       {1,0,0,0,0,1,0,1},
       {1,0,0,0,0,0,0,1},
       {1,1,1,0,0,0,0,1},
       {1,0,1,0,0,0,0,1},
       {1,1,1,1,1,1,1,1},
    };
};

void init_Player(Player& player);
void game_update(Game_state& state, Input& input, float delta_time);