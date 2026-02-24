<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Users', [
            'users' => User::with('roles')->latest()->paginate(20),
            'roles' => Role::all(['id', 'name']),
        ]);
    }

    public function store(StoreUserRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        if ($request->filled('role')) {
            $user->assignRole($request->role);
        }

        return back()->with('success', 'Usuario creado correctamente.');
    }

    public function update(UpdateUserRequest $request, User $user)
    {
        $data = [
            'name' => $request->name,
            'email' => $request->email,
        ];

        if ($request->filled('password')) {
            $data['password'] = Hash::make($request->password);
        }

        $user->update($data);

        if ($request->has('role')) {
            $user->syncRoles([$request->role]);
        }

        return back()->with('success', 'Usuario actualizado correctamente.');
    }

    public function destroy(User $user)
    {
        if ($user->hasRole('admin')) {
            $adminCount = User::role('admin')->count();
            if ($adminCount <= 1) {
                return back()->withErrors(['error' => 'No se puede eliminar al único administrador.']);
            }
        }

        $user->delete();

        return back()->with('success', 'Usuario eliminado correctamente.');
    }
}
