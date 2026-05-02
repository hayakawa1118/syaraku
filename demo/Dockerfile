FROM openjdk:17-jdk-slim
COPY target/*.jar app.jar
# コンテナ起動時にjarを実行
ENTRYPOINT ["java","-jar","/app.jar"]