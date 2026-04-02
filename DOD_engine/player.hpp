#pragma once
#define GRID_SIZE 64
#define PLAYER_HIGTH (GRID_SIZE*0.5f)


struct Player {
    float x, y;
    float angle;
    float speed;
    int higth = (int)PLAYER_HIGTH;
    float rotation_speed;
};
