#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <stdlib.h>

# define COLOR_OFF "\033[0m"       // Text Reset
# define BGREEN "\033[1;32m"       // GREEN
# define BYELLOW "\033[1;33m"      // YELLOW

int	wordcount(char const *s, char c)
{
	int	i;
	int	x;
	int	slen;

	i = 0;
	i = 0;
	x = 0;
	slen = strlen(s);
	while (s[i] == c)
		i++;
	while (i <= slen)
	{
		if ((s[i] == c) && (s[i - 1] != c))
			x++;
		if ((s[i] == '\0') && (s[i - 1] != c))
			x++;
		i++;
	}
	return (x);
}

int	checkblanks(char const *s, char c)
{
	int	i;
	int	blanks;

	i = 0;
	blanks = 1;
	while (s[i] != '\0')
	{
		if (s[i] != c)
			blanks = 0;
		i++;
	}
	return (blanks);
}

char	**create_bidimensional(const char *s, char **str, char c, size_t i)
{
	size_t	y;
	size_t	x;
	size_t	z;

	y = -1;
	x = 0;
	z = 0;
	while (i <= strlen(s))
	{
		if (s[i] != c && s[i] != '\0')
			x++;
		else if ((s[i] == c || s[i] == '\0') && (x > 0))
		{
			str[z] = (char *)calloc(sizeof(char), (x + 1));
			while (++y < x)
				str[z][y] = s[i + y - x];
			str[z++][y] = '\0';
			x = 0;
			y = -1;
		}
		i++;
	}
	return (str);
}

char	**ft_split(char const *s, char c)
{
	char	**str;
	size_t	x;
	size_t	i;

	i = 0;
	if (!s)
		return (NULL);
	if (checkblanks(s, c) == 1 || s[0] == '\0')
	{
		str = calloc(sizeof(char *), 1);
		return (str);
	}
	x = wordcount(s, c);
	str = (char **)calloc(sizeof(char *), (x + 1));
	if (!str)
		return (NULL);
	str[x] = NULL;
	while (s[i] == c)
		i++;
	return (create_bidimensional(s, str, c, i));
}

void	ft_freebidstr(char **s)
{
	int	i;

	i = 0;
	while (s[i] != NULL)
	{
		free(s[i]);
		i++;
	}
	free(s);
}
int main(void)
{
    char *str;
    char **words;
    int len = 0;
    str = malloc(sizeof(char) * 50);
    words = ft_split("cafe gorda msantos silla mesa",' ');

    for(int i = 0; i < 6;i++)
    {
        while(len != strlen(words[0]))
        {
            printf("write a word with %ld letters:\n",strlen(words[0]));
            scanf("%s", str);
            len = strlen(str);
        }
        len = 0;
        for(int j = 0; j < strlen(str);j++)
        {
            if(strchr(words[0],str[j]) && words[0][j] == str[j])
                printf(BGREEN"%c"COLOR_OFF,str[j]);
            else if(strchr(words[0],str[j]))
                printf(BYELLOW"%c"COLOR_OFF,str[j]);
            else
            {
                printf("%c",str[j]);
            }
        }
        printf("\n");
        if(!strncmp(words[0],str,strlen(words[0])))
        {
            printf("YOU WON\n");
            free(str);
            ft_freebidstr(words);
            exit (0);
        }
    }
    printf("YOU LOST\n");
    free(str);
    ft_freebidstr(words);
    return (0);
}