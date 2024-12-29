import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import GlobalApi from "@/app/_services/GlobalApi";
import { signIn, useSession } from "next-auth/react";

function PartnersCreation() {
  const { data, status } = useSession();
  const [categoryId, setCategoryId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    defaultValues: {
      nome: "",
      contactPerson: "",
      address: "",
      category: "",
      phoneNumber: "",
    },
  });

  const { handleSubmit, setValue, watch } = form;
  const category = watch("category");

  // Fetch category ID when category is selected
  useEffect(() => {
    if (category) {
      const fetchCategoryId = async () => {
        try {
          const categoryResult = await GlobalApi.getCategoryId(category);
          setCategoryId(categoryResult?.category?.id);
        } catch (error) {
          console.error("Errore nel recupero dell'ID categoria:", error);
        }
      };
      fetchCategoryId();
    }
  }, [category]);

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      // Verifica che l'utente sia autenticato
      if (!data?.user?.email) {
        throw new Error("Errore: l'utente non è autenticato o manca l'email.");
      }

      // Verifica che la categoria sia stata selezionata correttamente
      if (!categoryId) {
        throw new Error("Errore: Categoria non trovata.");
      }

      // Controlla che tutti i campi richiesti siano compilati
      if (!formData.nome || !formData.contactPerson || !formData.address || !formData.phoneNumber) {
        throw new Error("Errore: Compilare tutti i campi richiesti.");
      }

      // Crea il nuovo business
      const result = await GlobalApi.createNewBusiness(
        formData.nome,
        data.user.email, // Email dall'autenticazione
        formData.contactPerson,
        formData.address,
        categoryId,
        formData.phoneNumber
      );

      console.log("Business creato con successo:", result);
      form.reset(); // Resetta il form dopo il successo
    } catch (error) {
      console.error("Errore durante la creazione del business:", error.message || error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === "unauthenticated") {
    // Riprova la connessione al login se non autenticato
    signIn("descope");
  }

  return status === "authenticated" && (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 border rounded p-5">
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Impresa</FormLabel>
              <FormControl>
                <Input placeholder="Inserire Nome Impresa" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactPerson"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Proprietario (nome e cognome)</FormLabel>
              <FormControl>
                <Input placeholder="Inserire nominativo proprietario" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Indirizzo</FormLabel>
              <FormControl>
                <Input placeholder="Inserire Indirizzo Completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoria</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    setValue("category", value); // Sync value with form
                  }}
                  value={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Seleziona una categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Face">Face</SelectItem>
                    <SelectItem value="Body">Body</SelectItem>
                    <SelectItem value="Massage">Massage</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numero di telefono</FormLabel>
              <FormControl>
                <Input placeholder="Inserire numero di telefono" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creando..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}

export default PartnersCreation;
