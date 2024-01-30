import { User } from "@prisma/client";
import prisma from "../prisma"
import CryptoJS from 'crypto-js';

interface IUserProps { firstName: string, lastName:string, email:string, password:string }

export const createUser =  ({firstName, lastName, email, password}: IUserProps) => {
	// const { name, surname, email, password } = user;

	const hashedPassword = CryptoJS.SHA256(password).toString();

	 prisma.user.create({
		data: {
			name: firstName,
            surname: lastName,
			email,
			password: hashedPassword,
		},
	});
};