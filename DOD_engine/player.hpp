#pragma once
#define GRID_SIZE 64
#define PLAYER_HIGTH (GRID_SIZE/2)


struct Player {
    float x, y;
    float angle;
    float speed;
    int higth = PLAYER_HIGTH;
    float rotation_speed;
};
