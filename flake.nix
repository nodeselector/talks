{
    inputs = {
          nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
          flake-utils.url = "github:numtide/flake-utils";
          gitignore = {
            url = "github:hercules-ci/gitignore.nix";
            inputs.nixpkgs.follows = "nixpkgs";
          };
   };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
    gitignore,
    ...
  }:
    flake-utils.lib.eachDefaultSystem
    (system: let
      pkgs = import nixpkgs { inherit system; };
    in with pkgs; {
      devShells.default = pkgs.mkShell {
        buildInputs = [
          pkgs.nodejs
          go
        ];
       shellHook = ''
         cd escaping-the-stack
       '';
      };
    });
}
