
#define PI 3.1415926535f
#include "game.hpp"


void game_update(Game_state& state, Input& input, float delta_time) {


	float player_x_change = 0;
	float player_y_change = 0;
	float player_angle_change = 0;


	if (input.turn_left) {
		player_angle_change -= state.player.rotation_speed;
	}
	if (input.turn_rigth) {
			
		player_angle_change += state.player.rotation_speed;
	}
	if (input.w) {
		player_x_change += std::cos(state.player.angle * PI / 180.0f) * state.player.speed;
		player_y_change += std::sin(state.player.angle * PI / 180.0f) * state.player.speed;
	}
	if (input.s) {
		player_x_change -= std::cos(state.player.angle * PI / 180.0f) * state.player.speed;
		player_y_change -= std::sin(state.player.angle * PI / 180.0f) * state.player.speed;
	}
	if (input.d) {
		player_x_change -= std::cos((state.player.angle + 90) * PI / 180.0f) * state.player.speed;
		player_y_change -= std::sin((state.player.angle + 90) * PI / 180.0f) * state.player.speed;
	}
	if (input.a) {
		player_x_change -= std::cos((state.player.angle + 90) * PI / 180.0f) * state.player.speed;
		player_y_change -= std::sin((state.player.angle + 90) * PI / 180.0f) * state.player.speed;
	}

	player_x_change *= delta_time,
	player_y_change *= delta_time;
	player_angle_change *= delta_time;


	state.player.angle += player_angle_change;

	if (state.map[(int)(state.player.y + player_y_change) / GRID_SIZE][(int)(state.player.x + player_x_change) / GRID_SIZE] == 0) {
		state.player.x += player_x_change;
		state.player.y += player_y_change;
	}
	else {

		player_x_change /= 4;
		player_y_change /= 4;




		if (state.map[(int)(state.player.y) / GRID_SIZE][(int)(state.player.x + player_x_change) / GRID_SIZE] == 0) {
			state.player.x += player_x_change;
		}
		if (state.map[(int)(state.player.y + player_y_change) / GRID_SIZE][(int)(state.player.x) / GRID_SIZE] == 0) {
			state.player.y += player_y_change;
		}
	}



}
