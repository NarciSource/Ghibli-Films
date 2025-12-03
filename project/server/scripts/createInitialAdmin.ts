import argon2 from 'argon2';
import dotenv from 'dotenv';
import 'dotenv/config';

import { createDB } from '@/db/db-client';
import { User } from '@/entities/User';

dotenv.config();

async function createInitialAdmin() {
    await createDB();

    const email = process.env.INIT_ADMIN_EMAIL;
    const password = process.env.INIT_ADMIN_PASSWORD;
    const username = process.env.INIT_ADMIN_USERNAME;

    const hashedPassword = await argon2.hash(password);

    const newUser = User.create({
        email,
        password: hashedPassword,
        username,
        isAdmin: true,
    });

    await newUser.save();

    console.log('Initial admin created');

    return newUser;
}

createInitialAdmin()
    .catch(console.error)
    .finally(() => process.exit());
