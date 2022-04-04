# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: marcos <marcos@student.42.fr>              +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/11/17 19:06:31 by msantos-          #+#    #+#              #
#    Updated: 2022/04/04 20:30:56 by marcos           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

all:
	python3 BACKEND/server.py | npm run --prefix FRONTEND start

clean:

fclean: clean

re: fclean all