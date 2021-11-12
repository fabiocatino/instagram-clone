import React from 'react';
import Image from 'next/image';
import {
	SearchIcon,
	PlusCircleIcon,
	UserGroupIcon,
	HeartIcon,
	PaperAirplaneIcon,
	MenuIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

const Header = () => {
	return (
		<div className="border-b  bg-white shadow-sm sticky top-0 z-50">
			<div className="flex justify-between h-[54px] max-w-6xl mx-5 lg:mx-auto cursor-pointer">
				
				{/* LEFT SECTION */}
				<div className="relative hidden lg:inline-grid  w-24">
					<Image
						src="https://links.papareact.com/ocw"
						layout="fill"
						alt="logo"
						objectFit="contain"
					/>
				</div>

				<div className="relative lg:hidden w-10  flex-shrink-0 cursor-pointer">
					<Image
						src="https://links.papareact.com/jjm"
						layout="fill"
						alt="logo"
						objectFit="contain"
					/>
				</div>

				{/* MIDDLE SECTION */}
				<div className="max-w-xs flex items-center ">
					<div className="relative p-3 rounded-md ">
						<div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
							<SearchIcon className="h-3 w-5 text-gray-500" />
						</div>

						<input
							className="bg-gray-50 block w-full pl-10 sm:text-xs border-gray-300
                         focus:ring-black focus:border-black rounded-md "
							type="text"
							placeholder="Search"
						/>
					</div>
				</div>

				{/* RIGHT SECTION */}
				<div className="flex items-center justify-end space-x-4">
					<HomeIcon className="navBtn" />
					<MenuIcon className="h-6 md:hidden cursor-pointer" />
					<div className="relative">
						<PaperAirplaneIcon className="navBtn rotate-45" />
						<div
							className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center 
                        animate-pulse text-white"
						>
							3
						</div>
					</div>
					<PlusCircleIcon className="navBtn" />
					<UserGroupIcon className="navBtn" />
					<HeartIcon className="navBtn" />
					<img
						src="https://links.papareact.com/3ke"
						alt="propic"
						className="h-8 rounded-full cursor-pointer"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
