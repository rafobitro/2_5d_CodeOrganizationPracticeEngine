#pragma once
#define STEP 0.1f
#define ANGLE_MULTIPLIER (int)(1.0f/STEP)
#define STEPS (int)(360.0f/STEP)
#define PI 3.1415926535f
#define ANGLE_TO_RADIAN  PI / 180.0f

#include <cmath>

extern float sin_table[STEPS];
extern float cos_table[STEPS];

void build_trig_tables();


