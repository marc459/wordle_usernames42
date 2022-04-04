# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: marcos <marcos@student.42.fr>              +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/11/17 19:06:31 by msantos-          #+#    #+#              #
#    Updated: 2022/04/04 20:57:09 by marcos           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

all: buildfront
	python3 BACKEND/server.py | npm run --prefix FRONTEND start

buildfront:
	npm run --prefix FRONTEND heroku-postbuild

back:
	python3 BACKEND/server.py

front:
	cd FRONTEND && ng serve

dependencies:
	pip install BACKEND/requirements.txt
clean:

fclean: clean

re: fclean all