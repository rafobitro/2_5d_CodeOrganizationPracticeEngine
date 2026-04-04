#include "trig_tables.hpp"
#include <cmath>

float sin_table[STEPS];
float cos_table[STEPS];

void build_trig_tables() {
    float angle = 0;
    for (int i = 0; i < STEPS; i++) {
        sin_table[i] = sin(angle * ANGLE_TO_RADIAN);
        cos_table[i] = cos(angle * ANGLE_TO_RADIAN);
        angle += STEP;
    }
}