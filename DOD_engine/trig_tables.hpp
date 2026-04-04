#pragma once
#define STEP 0.1f
#define STEPS (360.f/STEP)
#define PI 3.1415926535f
#define ANGLE_TO_RADIAN  PI / 180.0f

#include <cmath>

float sin_table[(int)STEPS];
float cos_table[(int)STEPS];

void build_trig_tables() {
	float angle = 0;
	for (int i = 0;i < (int)STEPS;i++) {
		sin_table[i] = sin(angle * ANGLE_TO_RADIAN);
		cos_table[i] = cos(angle * ANGLE_TO_RADIAN);
		angle += STEP;
	}
}


