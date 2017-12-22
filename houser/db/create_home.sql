
    id serial primary
    homeName varchar(50),
    description varchar(100),
    address varchar(30),
    city varchar(20),
    state varchar(20),
    zip integer,
    image_url varchar(300),
    loan_amount integer,
    monthly_mortgage integer,
    desired_rent integer,
    user_id integer, 
    foreign key (user_id) references users(id)
)
create table Home (