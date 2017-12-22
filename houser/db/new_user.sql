insert into users ( username, password)
values ($1, $2);

select username, id from users where username = $1 and password = $2;