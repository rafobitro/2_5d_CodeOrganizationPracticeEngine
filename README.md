# 2.5D Raycasting Engine

**PROJECT IN PROGRESS**
> Built from scratch using Win32 API and a raw pixel buffer. No game engine, no graphics library.

A complex raycasting engine written in C++ and rewritten multiple times using different programming paradigms to compare code organization, readability, performance, and suitability for optimization techniques such as SIMD and multicore computing.

---
## Why This Project

I am bad at code organization. I have mostly written “spaghetti code” and often got lost when working on complex projects. This is because I did not take code organization and optimization seriously enough, but that needs to change.

Code organization is a highly opinionated subject in programming. There are many books about it, and different programming paradigms often contradict each other. Instead of only reading or listening to opinions from others, I wanted to learn by experimenting myself.

This project is my way of testing different paradigms and choosing what works best for me based on the metrics mentioned above. I chose a raycasting engine because it is complex enough to require proper structure.

I am using the following paradigms as the main approaches:

* DOD (Data-Oriented Design) – flat data structures, aiming for cache-friendly data layout (in progress)
* ECS (Entity Component System) – entities as IDs, components as data, systems process components (planned)
* OOP (Object-Oriented Programming) – classes own data and behavior, using inheritance and encapsulation (planned)
* FP (Functional Programming) – pure functions with no global state (maybe later, I dislike the idea of no global state but may change my mind)

After implementing these paradigms, I will compare them based on three main criteria:

Programmer Experience – which is more comfortable to write and maintain
Performance – which provides higher FPS and lower memory usage
Optimization Readiness – which is easier to optimize later using SIMD and multicore computing

---
## Features

**Renderer**

* Wall detection raycaster (done in DOD)
* Wall texture mapping (done in DOD)
* Floor and ceiling texture mapping (done in DOD)
* Distance-based fade lighting (done in DOD)
* Dynamic lighting (planned)
* Billboard rendering (objects attached to walls) (planned)
* Enemy rendering (planned)
* Bullet rendering (planned)
* Multiple textures per map (planned)
* Wall animations (destruction, doors opening, etc.) (planned)
* DDA optimisation (planed)
* diagonal walls (planed)
* deferent wall hgth and higth change (planed)

**Textures**

* Basic texture generator (done in DOD)
* Texture loading from images (planned)
* Texture light precomputation (planned)
* Normal maps (maybe)
* Texture editing (maybe)
* Texture viewer (partly done in DOD)

**Physics**

* Ball physics (bullets that can bounce and interact in 3D space) (planned)
* Collision detection (partly done in DOD)
  
**System**

* Double buffering (planned)
* Delta time (done in DOD)
* Frame cap (planned)
* Input abstraction from Windows API (done in DOD)
* Renderer abstraction from Windows API (done in DOD)
* Sound system (planned)
* UI (health bar, FPS counter, weapon view) (partly done in DOD)
* Networking for multiplayer (maybe)

**Game**

Enemy AI (planned)
Basic game logic (start, death, respawn, win) (planned)
Map editor (planned)
Map generator (planned)
Multiplayer (PvP and PvE) (maybe)

**Ports**

WebAssembly via Emscripten (planned)
Linux (Arch + Wayland) (likely)
Android (unlikely, maybe)

---
## Current State

Below are screenshots showing the current state of the engine.



<img width="800" height="476" alt="image" src="https://github.com/user-attachments/assets/9fa41ff8-d6f5-41fb-91b2-a745b5c04ebd" />

<img width="793" height="476" alt="image" src="https://github.com/user-attachments/assets/e21f0048-6036-45a2-aace-91aeacad9ea4" />

<img width="508" height="536" alt="image" src="https://github.com/user-attachments/assets/58c1e6b4-fae7-4b30-96bb-35dc02113d1a" />

<img width="507" height="537" alt="image" src="https://github.com/user-attachments/assets/dfd0f0d9-031e-4186-a4c1-fb23dd9f2eb5" />




---
## Build Instructions

Currently works on Windows and requires CMake and a Microsoft's C++ compiler(cl).
```
cmake -B build
cmake --build build
```
You can modify the CMake configuration to use a different compiler if needed.

---
## Technical Details And Challenges

The rendering approach is simple in concept: I use an array of colors and pass it to the Windows API to draw the frame.

Raycasting itself is not very difficult. It mainly involves separating X and Y components using sine and cosine. Once the wall distance is known, its height can be projected onto the screen. Everything else becomes floor or ceiling. (However, implementing this using only integer arithmetic, like John Carmack did when creating Wolfenstein 3D, would be a significant challenge.)

Wall texture mapping is also relatively straightforward. For the X coordinate, you take the fractional part of the hit position (x − floor(x)), and for Y, you map the pixel relative to the wall height.

Fading and texture mapping for the floor and ceiling are simple in theory, but much harder to derive. The idea is to treat the wall, floor, and ceiling as part of a continuous vertical slice and compute distances using similar 90 degree triangles.

* The first Big triangle uses the distance from the player to the wall (D) and the height from the wall at player eye height (horizon ) to the j point of (ceiling/ floor)  (H), measured in game units.
* The second Small triangle uses the distance from the player’s eye level to the (ceiling/ floor) (h) and the unknown distance to a specific pixel on the (ceiling/ floor) (d).
  


H =  distance from the eye level(horizon) to the (ceiling/ floor) point along the vertical slice of wall  (in game units )
D =  Distance to the wall. (in game units )
h =  distance between player eyes and the (ceiling/ floor) (in game units )
d = the distance to the pixel in (ceiling/ floor) (in game units )(what we need  )

Using the relation:

D / H = d / h

we can derive:

d = (D × h) / H

Note d is not distance from player eye to the pixel of the (ceiling/ floor) it is distance "to a point with the same X and Y coordinates, ignoring the Z axis . 

delta time is much easier than I thought i just need to measure time of each frame in second and multiplay to a game logic speed which is game units per second 

game UI is overlay on top of the game renderer and it is working by modiflying part of the bitmap acording to the input like location and size of the input i added overflow to independed from a location even if the thing is not fit it would not cause a crash. Also i usued used coordinate abstraction to calculate cordinates independed from resolution .



