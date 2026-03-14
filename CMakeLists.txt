cmake_minimum_required(VERSION 3.23)
project(organisation)

add_executable(DOD_engine WIN32 DOD_engine/main.cpp)

target_sources(DOD_engine PRIVATE DOD_engine/main.cpp)
#  cl DOD_engine/main.cpp /Fe:DOD_engine/main.exe user32.lib gdi32.lib

target_link_libraries(DOD_engine PRIVATE user32 gdi32)
