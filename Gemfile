source "https://rubygems.org"

gem "jekyll", github: "jekyll/jekyll"
gem "liquid-c"

gem "minima", "~> 2.5"

group :jekyll_plugins do
  gem "jekyll-archives"
  gem "jekyll-commonmark"
  gem "jekyll-feed"
  gem "jekyll-include-cache"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?

