class CharactersController < ApplicationController
  before_action :set_character, only: %i[ show edit update destroy ]

  # GET /characters or /characters.json
  def index
    @characters = Current.user.characters
  end

  # GET /characters/1 or /characters/1.json
  def show
  end

  # GET /characters/new
  def new
    @character = Character.new
  end

  # GET /characters/1/edit
  def edit
  end

  # POST /characters or /characters.json
  def create
    @character = Current.user.characters.new(character_params)

    respond_to do |format|
      if @character.save
        format.html { redirect_to @character, notice: "Character was successfully created." }
        format.json { render :show, status: :created, location: @character }
      else
        format.html { render :new, status: :unprocessable_content }
        format.json { render json: @character.errors, status: :unprocessable_content }
      end
    end
  end

  # PATCH/PUT /characters/1 or /characters/1.json
  def update
    respond_to do |format|
      if @character.update(character_params)
        format.html { redirect_to @character, notice: "Character was successfully updated.", status: :see_other }
        format.json { render :show, status: :ok, location: @character }
      else
        format.html { render :edit, status: :unprocessable_content }
        format.json { render json: @character.errors, status: :unprocessable_content }
      end
    end
  end

  # DELETE /characters/1 or /characters/1.json
  def destroy
    @character.destroy!

    respond_to do |format|
      format.html { redirect_to characters_path, notice: "Character was successfully destroyed.", status: :see_other }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_character
      @character = Current.user.characters.find_by(id: params.expect(:id))

      redirect_to characters_path unless @character
    end

    # Only allow a list of trusted parameters through.
    def character_params
      params.expect(character: [ :name, :origin, :character_class, :archetype, :current_pv, :current_pe, :current_sanity, :nex, :patent, :prestige_points, :element_affinity, :user_id, :for, :agi, :int, :pre, :vig ])
    end
end
