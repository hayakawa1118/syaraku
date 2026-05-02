FROM eclipse-temurin:17-jdk
COPY target/*.jar app.jar
# コンテナ起動時にjarを実行
ENTRYPOINT ["java","-jar","/app.jar"]