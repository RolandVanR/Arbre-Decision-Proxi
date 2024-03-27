FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libicu-dev \
    libzip-dev \
    zlib1g-dev

RUN docker-php-ext-install intl pdo_mysql zip

# Installez Composer
#RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
#    php -r "if (hash_file('sha384', 'composer-setup.php') === 'edb40769019ccf227279e3bdd1f5b2e9950eb000c3233ee85148944e555d97be3ea4f40c3c2fe73b22f875385f6a5155') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" \
#    php composer-setup.php \
#    php -r "unlink('composer-setup.php');" \
#    mv composer.phar /usr/local/bin/composer

# Installez Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Installez Symfony CLI
RUN curl -sS https://get.symfony.com/cli/installer | bash
RUN mv /root/.symfony*/bin/symfony /usr/local/bin/symfony


# Définissez le répertoire de travail
WORKDIR /var/www/html

# Copiez le code source de l'application
COPY . .

# Installez les dépendances de l'application
RUN COMPOSER_ALLOW_SUPERUSER=1 composer install
#RUN composer install

# Exposez le port 8000
#EXPOSE 8000


#CMD ["php-fpm"]
#CMD ["symfony", "server:start", "--no-tls", "0.0.0.0:8000"]
#CMD ["symfony", "local:server:start", "--port=8000", "--no-tls", "--allow-http", "--daemon"]
CMD ["symfony", "local:server:start", "--port=8000", "--no-tls", "--allow-http"]
#CMD ["php-fpm"]