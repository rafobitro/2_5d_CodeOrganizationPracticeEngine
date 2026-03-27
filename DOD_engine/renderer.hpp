#pragma once
#define PI 3.1415926535f
#define GRID_SIZE 64
#define VERTICAL_FOV 90
#define HORIZONTAL_FOV 90

#include "game.hpp"
#include "textures.hpp"
#include <cmath>


void render(Game_state& state);