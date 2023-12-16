from api.models.task import Base
from sqlalchemy import create_engine

DB_URL = "mysql+pymysql://root@db:3306/demo?charset=utf8"
engine = create_engine(DB_URL, echo=True)

# host = "db:3308"
# db_name = "sample_db"
# user = "mysqluser"
# password = "mysqlpass"

# DATABASE = 'mysql+aiomysql://%s:%s@%s/%s?charset=utf8' % (
#     user,
#     password,
#     host,
#     db_name,
# )

# engine = create_engine(
#     DATABASE,
#     encoding="utf-8",
#     echo=True
# )

def reset_database():
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)


if __name__ == "__main__":
    reset_database()