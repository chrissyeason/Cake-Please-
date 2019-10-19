class UpdateIngredientsAndInstructionColumns < ActiveRecord::Migration[6.0]
  def change
    change_table :recipes do |t|
      t.change :ingredients, "varchar[] USING (string_to_array(ingredients, '\n'))"
      t.change :instructions, "varchar[] USING (string_to_array(instructions, '\n'))"
    end
  end
end
