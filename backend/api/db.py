from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import declarative_base, sessionmaker

ASYNC_DB_URL = "mysql+aiomysql://root@db:3306/demo?charset=utf8"
async_engine = create_async_engine(ASYNC_DB_URL, echo=True)
async_session = sessionmaker(
    autocommit=False, autoflush=False, bind=async_engine, class_=AsyncSession
)

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

# ENGINE = create_async_engine(
#     DATABASE,
#     encoding="utf-8",
#     echo=True
# )

# async_session = sessionmaker(
#     autocommit=False, autoflush=False, bind=ENGINE, class_=AsyncSession
# )

Base = declarative_base()

async def get_db():
    async with async_session() as session:
        yield session