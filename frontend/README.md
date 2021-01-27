# PrototypeApp

This project is a submodule of the "angular11-prototype-workspace".

## Why submodules?
Submodules are useful when you have a project that is under git version control, 
and you want to include a copy of another project that is also under git version control.

## How this submodule was created?
1. Initialize two git repository in the frontend directory and in the angular11-prototype-workspace.
2. From the angular11-prototype-workspace directory run this command:  git submodule add <url>/frontend :: url example: https://github.com/ogm710811
3. Check git status with command: git status.
4. Add folders and files with command: git add <files>.
5. Commit your first changes with command: git commit -m "added submodule".
