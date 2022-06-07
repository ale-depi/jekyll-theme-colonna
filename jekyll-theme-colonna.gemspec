# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-colonna"
  spec.version       = "22.06"
  spec.authors       = ["Alessandro De Piccoli"]
  spec.email         = ["ale.depi@live.it"]

  spec.summary       = "A minimal responsive Jekyll theme."
  spec.homepage      = "https://github.com/ale-depi/jekyll-theme-colonna"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README\.md|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
end
