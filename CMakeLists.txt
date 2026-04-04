cmake_minimum_required(VERSION 3.23)
project(organisation)


add_executable(DOD_engine WIN32 
    DOD_engine/win_main.cpp 
    DOD_engine/game.cpp 
    DOD_engine/player.cpp 
    DOD_engine/renderer.cpp 
    DOD_engine/textures.cpp
    DOD_engine/UI_renderer.cpp
    DOD_engine/trig_tables.cpp

 "DOD_engine/UI_renderer.cpp")


add_executable(texture_viewer WIN32
    DOD_engine/win_texture_vewer.cpp
    DOD_engine/textures.cpp
 "DOD_engine/UI_renderer.cpp")


target_include_directories(DOD_engine PRIVATE external)
target_include_directories(texture_viewer PRIVATE external)

target_compile_definitions(texture_viewer PRIVATE 
    TEXTURE_PATH="${CMAKE_CURRENT_SOURCE_DIR}/external/textures/"
)

target_compile_definitions(DOD_engine PRIVATE 
    TEXTURE_PATH="${CMAKE_CURRENT_SOURCE_DIR}/external/textures/"

)


target_link_libraries(texture_viewer PRIVATE user32 gdi32)

target_link_libraries(DOD_engine PRIVATE user32 gdi32)
