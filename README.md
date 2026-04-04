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
* Dynamic lighting (meybe)
* Billboard rendering (objects attached to walls) (meybe)
* Enemy rendering (planned)
* Bullet rendering (meybe)
* player height change (done in DOD)
* Multiple textures per map (done in DOD)
* Wall animations (destruction, doors opening, etc.) (meybe)
* DDA optimisation (planed)
* Use trigonometric precompute (done in DOD)

**Textures**

* Basic texture generator (done in DOD)
* Texture loading from images BMP (done in DOD)
* Texture light precomputation (meybe)
* Normal maps (maybe)
* Texture editor (meybe)
* Texture viewer (done in DOD not need afther texture editor )

**Physics**

* Ball physics (bullets that can bounce and interact in 3D space) (meybe )
* Collision detection (partly done in DOD)
  
**System**

* Double buffering (meybe)
* Delta time (done in DOD)
* Frame cap (planned)
* Input abstraction from Windows API (done in DOD)
* Renderer abstraction from Windows API (done in DOD)
* Sound system (meybe)
* UI (health bar, FPS counter, weapon view) (partly done in DOD)
* Networking for multiplayer (maybe)

**Game**

* Enemy AI (planned)
* Basic game logic (start, death, respawn, win) (planned)
* advanced game logic (surviorlike gameplay) (meybe)
* Map editor (planned)
* Map generator (meybe)
* Multiplayer (PvP and PvE) (maybe)

**Ports**

* WebAssembly via Emscripten (planned)
* Linux (Arch + Wayland) (likely, meybe)
* mac (unlikely, maybe)
* Android (unlikely, maybe)

---
## Current State

Below are screenshots showing the current state of the engine. the second image is showing difference between release and debug builds. and render resolution is 800 by 450


<img width="796" height="479" alt="image" src="https://github.com/user-attachments/assets/1c45c4a5-17e2-4758-a171-fc0b5ef54dc4" />

<img width="799" height="478" alt="image" src="https://github.com/user-attachments/assets/b1e8eaf3-165e-4b72-830c-cc593db85f6d" />

<img width="795" height="480" alt="image" src="https://github.com/user-attachments/assets/53a8c0e8-50c3-4048-9db1-0042bf4ab415" />

<img width="512" height="541" alt="image" src="https://github.com/user-attachments/assets/9afa4725-9693-43de-99fe-44edc2ad1d68" />

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

game UI is overlay on top of the game renderer and it is working by modiflying part of the bitmap acording to the input like location and size of the input i added overflow to independed from a location even if the thing is not fit it would not cause a crash. Also i usued used coordinate abstraction to calculate cordinates independed from resolution . And I used Daniel Helper's font ` 8x8 basic.h` for the ASCII bitmaps.

BMP loading is simple and complex at the same time. While reading about BMP files, I found a lot of conflicting information. Some sources say the bitmap data starts at byte 54, others say 150, and some mention different offsets entirely. There is also confusion about color formats: some use 4-byte RGBA, others 3-byte RGB, and some store colors in BGR order instead of RGB.

So I started experimenting, iterating and changing different things until I could see part of the image. Once I figured out where the image data actually starts, things became clearer. In my case, almost nothing I found online matched. My BMP images used 4-byte BGRA format and the data started at byte 134.

In the end, I kept it simple. I read from the file, adjusted offsets until the image appeared correctly, and identified the color format visually. The loader itself is less than 10 lines. I also skipped the alpha channel, since it was not needed for the textures created by 711studios.

