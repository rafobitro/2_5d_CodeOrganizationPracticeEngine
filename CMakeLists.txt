cmake_minimum_required(VERSION 3.23)
project(organisation)


add_executable(DOD_engine WIN32 
    DOD_engine/win_main.cpp 
    DOD_engine/game.cpp 
    DOD_engine/player.cpp 
    DOD_engine/renderer.cpp 
    DOD_engine/textures.cpp
)


add_executable(texture_viewer WIN32
    DOD_engine/win_texture_vewer.cpp
    DOD_engine/textures.cpp
)

target_link_libraries(texture_viewer PRIVATE user32 gdi32)

target_link_libraries(DOD_engine PRIVATE user32 gdi32)
