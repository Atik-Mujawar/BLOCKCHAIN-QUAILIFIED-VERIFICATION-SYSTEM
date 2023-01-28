// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;


contract Ulogin
{
	uint public userCount = 0;

	mapping(string => user) public usersList;

	struct user
	{
	string username;
	string email;
	string password;
    string college_name;
    string college_num;
    string secret_key;
	}

// events

event userCreated(
	string username,
	string email,
	string password,
    string college_name,
    string college_num,
    string secret_key
	);

function createUser(string memory username,
					string memory email,
					string memory password,
                    string memory college_name,
                    string memory college_num,
                    string memory secret_key) public
{	
	userCount++;
	usersList[email] = user(username,
                            email,
                            password,
                            college_name,
                            college_num,
                            secret_key);
	emit userCreated(username,
                    email,
                    password,
                    college_name,
                    college_num,
                    secret_key);
	}
}
