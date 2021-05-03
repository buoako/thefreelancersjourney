FROM ruby:2.7.3-alpine3.13
RUN apk add build-base=0.5-r2

WORKDIR /app
COPY ./Gemfile* ./
RUN bundle install

ENTRYPOINT ["bundle", "exec", "jekyll"]
CMD ["help"]
