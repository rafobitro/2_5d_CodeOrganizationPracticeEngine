#include "player.hpp"


void init_Player(Player& player) {
    player.x = 4 * GRID_SIZE;
    player.y = 4 * GRID_SIZE;
    player.angle = 90.1;
    player.speed = 3 * GRID_SIZE;
    player.rotation_speed = 90;
}
